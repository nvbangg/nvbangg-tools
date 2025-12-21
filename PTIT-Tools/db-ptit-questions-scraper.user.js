// ==UserScript==
// @name         DB PTIT Questions Scraper
// @namespace    https://github.com/nvbangg
// @version      1.0
// @description  Export All DB PTIT Questions to Markdown
// @author       nvbangg (https://github.com/nvbangg)
// @copyright    Copyright (c) 2025 Nguyễn Văn Bằng (nvbangg, github.com/nvbangg)
// @homepage     https://github.com/nvbangg
// @match        https://db.ptit.edu.vn/*
// @license      GPL-3.0
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const API_ENDPOINT = "https://dbapi.ptit.edu.vn/api/assignment/question/all";
  const PAGE_SIZE = 500;

  const getToken = () => localStorage.getItem("access_token")?.replace(/"/g, "");

  const api = async (page) => {
    const token = getToken();
    if (!token) throw new Error("Vui lòng đăng nhập!");
    const res = await fetch(`${API_ENDPOINT}?page=${page}&size=${PAGE_SIZE}&sort=createdAt,desc`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error(`Lỗi tải dữ liệu: ${res.status}`);
    return res.json();
  };

  const formatQuestion = (q, n) => {
    const answers = (q.questionAnswers || [])
      .map((a, i) => {
        const label = String.fromCharCode(65 + i);
        return `#### ${label}${a.correct ? " (Đúng ✓)" : ""}\n\n${a.content}`;
      })
      .join("\n\n");

    return `## Câu ${n}: ${q.code || "N/A"}

- <small>Danh mục: ${q.categoryName || "N/A"}</small>
- <small>Loại câu hỏi: ${q.type || "N/A"}</small>
- <small>Độ khó: ${q.difficultyLevel || "N/A"}</small>

### Nội dung câu hỏi

${q.content || ""}

### Đáp án
${answers}

`;
  };

  const exportAll = async () => {
    try {
      updateBtn("Đang tải...", true);

      const firstPage = await api(0);
      const totalPages = firstPage.totalPages || 0;
      let allQuestions = [...(firstPage.content || [])];

      for (let p = 1; p < totalPages; p++) {
        updateBtn(`Tải trang ${p + 1}/${totalPages}...`, true);
        const data = await api(p);
        if (data.content) allQuestions.push(...data.content);
        await new Promise((r) => setTimeout(r, 100));
      }

      updateBtn("Đang tạo file...", true);
      const now = new Date();
      const dateStr = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const filename = `DB_PTIT_QUESTIONS_${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
        now.getDate()
      ).padStart(2, "0")}.md`;

      const content =
        `# DB PTIT - Tổng hợp câu hỏi Questions\n\n## Source: https://github.com/nvbangg/CodePTIT\n\n` +
        `- **Tổng số câu hỏi**: ${allQuestions.length}\n\n---\n\n` +
        allQuestions.map((q, i) => formatQuestion(q, i + 1)).join("---\n\n");

      const blob = new Blob([content], { type: "text/markdown" });
      const a = Object.assign(document.createElement("a"), {
        href: URL.createObjectURL(blob),
        download: filename,
      });
      a.click();
      URL.revokeObjectURL(a.href);

      alert(`✅ Đã xuất ${allQuestions.length} câu hỏi!`);
    } catch (err) {
      alert(`Lỗi: ${err.message}`);
    } finally {
      updateBtn("Export Questions", false);
    }
  };

  let btn;
  const updateBtn = (text, disabled) => {
    if (btn) {
      btn.textContent = text;
      btn.disabled = disabled;
      btn.style.opacity = disabled ? "0.6" : "1";
    }
  };

  const init = () => {
    btn = Object.assign(document.createElement("button"), {
      textContent: "Export Questions",
      onclick: () => !btn.disabled && exportAll(),
    });
    btn.style.cssText =
      "position:fixed;bottom:20px;right:20px;z-index:9999;padding:10px 20px;background:#28a745;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:bold;box-shadow:0 2px 8px rgba(0,0,0,0.2)";
    document.body.appendChild(btn);
  };

  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
