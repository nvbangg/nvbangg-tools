// ==UserScript==
// @name         Code PTIT Scraper
// @namespace    https://github.com/nvbangg/nvbangg-tools
// @version      1.0
// @description  Export all questions from Code PTIT to Markdown
// @author       nvbangg (https://github.com/nvbangg)
// @copyright    Copyright (c) 2025 Nguyễn Văn Bằng (nvbangg, github.com/nvbangg)
// @homepage     https://github.com/nvbangg/nvbangg-tools
// @match        https://code.ptit.edu.vn/beta/problems*
// @license      GPL-3.0
// @grant        none
// ==/UserScript==

(() => {
  "use strict";
  const API = "https://code.ptit.edu.vn/api";
  const BATCH = 50;
  const api = (e) =>
    fetch(`${API}${e}`, {
      headers: { Accept: "application/json", Authorization: `Bearer ${localStorage.access_token}` },
    }).then((r) => r.json());
  const getCourse = () => {
    try {
      const c = JSON.parse(localStorage.currentCourse);
      return { id: c?.id, name: c?.subject?.name };
    } catch {
      return {};
    }
  };

  const clean = (html) => {
    const d = new DOMParser().parseFromString(html, "text/html");
    d.querySelectorAll("[style],[class],[align]").forEach((e) => {
      e.removeAttribute("style");
      e.removeAttribute("class");
      e.removeAttribute("align");
    });
    d.querySelectorAll("table").forEach((e) => {
      e.removeAttribute("border");
      e.removeAttribute("cellpadding");
      e.removeAttribute("cellspacing");
    });
    d.querySelectorAll("span").forEach((e) => e.replaceWith(...e.childNodes));
    d.querySelectorAll("table p").forEach((e) => {
      const div = document.createElement("div");
      div.innerHTML = e.innerHTML;
      e.replaceWith(div);
    });
    d.querySelectorAll("pre").forEach((e) => {
      e.textContent = e.textContent
        .split("\n")
        .map((l) => l.trimStart())
        .join("\n")
        .trim();
    });
    d.querySelectorAll("p").forEach((e) => {
      if (!e.textContent.trim()) e.remove();
    });
    return d.body.innerHTML
      .split("\n")
      .map((l) => l.trimStart())
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");
  };

  const btn = Object.assign(document.createElement("button"), { textContent: "📥 Export All" });
  btn.style.cssText =
    "position:fixed;top:80px;right:20px;z-index:9999;padding:12px 20px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:bold;box-shadow:0 4px 15px rgba(102,126,234,.4);min-width:100px";
  btn.onclick = async () => {
    if (btn.disabled) return;
    if (!localStorage.access_token) return alert("❌ Chưa đăng nhập!");
    const { id, name } = getCourse();
    if (!id) return alert("❌ Chưa chọn lớp!");

    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.textContent = "...";
    try {
      let all = [],
        p = 1;
      while (true) {
        const r = await api(`/questions?course_id=${id}&page=${p}&per_page=100&order=asc&by=code`);
        if (r.code === 401) throw new Error("Hết phiên!");
        if (r.code !== 200) throw new Error("Lỗi API");
        all.push(...(r.data || []));
        if ((r.data?.length || 0) < 100) break;
        p++;
      }
      if (!all.length) throw new Error("Không có bài!");

      let md = `# ${name}\n\n## Source: https://github.com/nvbangg/CodePTIT\n\n- Tổng cộng ${all.length} bài tập\n\n`;
      for (let i = 0; i < all.length; i += BATCH) {
        btn.textContent = `${Math.min(i + BATCH, all.length)}/${all.length}`;
        const res = await Promise.all(
          all.slice(i, i + BATCH).map(async (q) => {
            try {
              const { data: d } = await api(`/questions/${q.code}?course_id=${id}`);
              return d
                ? `## ${d.code} - ${d.name}\n\n- <small>Chủ đề con: ${
                    q.sub_group?.name || "N/A"
                  }</small>\n- <small>Độ khó: ${q.level || "N/A"}</small>\n\n${
                    d.content ? clean(d.content) : ""
                  }\n\n---\n\n`
                : "";
            } catch {
              return "";
            }
          })
        );
        md += res.join("");
      }

      Object.assign(document.createElement("a"), {
        href: URL.createObjectURL(new Blob([md])),
        download: `${name}.md`,
      }).click();
      btn.textContent = `✅ ${all.length}`;
    } catch (e) {
      alert(`❌ ${e.message}`);
    }
    setTimeout(() => {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.textContent = "📥 Export All";
    }, 2000);
  };
  document.body.appendChild(btn);
})();
