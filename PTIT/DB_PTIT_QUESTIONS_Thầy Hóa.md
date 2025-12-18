# DB PTIT - Tổng hợp câu hỏi Questions

- **Tổng số câu hỏi**: 60

---

## Câu 1: INT1313_S5_900089

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: Course(1) — has — Syllabus(1). Mỗi Course có đúng 1 Syllabus, mỗi Syllabus thuộc đúng 1 Course. Chọn lược đồ đúng.</p>

### Đáp án
- A 

<p>COURSE(CID PK, SID FK); SYLLABUS(SID PK, ...) nhưng không UNIQUE</p>

- B 

<p>COURSE(CID PK); SYLLABUS(SID PK, CID FK) và bỏ ràng buộc 1–1</p>

- C 

<p>COURSE(CID PK); SYLLABUS(SID PK) và bảng trung gian COURSE_SYLLABUS</p>

- D (Đúng ✓)

<p>COURSE(CID PK, SyllabusID UNIQUE/FK→SYLLABUS); SYLLABUS(SID PK, ...)</p>

---

## Câu 2: INT1313_S5_713426

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD (ảnh): NhanVien(N) — thamGia — DuAn(N), quan hệ N–N có thuộc tính VaiTro. Xem hình: https://i.imgur.com/9F5yZ1r.png. Chọn lược đồ đúng.</p>

### Đáp án
- A 

<p>NHANVIEN(NVID PK, DID FK, VaiTro); DUAN(DID PK)</p>

- B 

<p>DUAN(DID PK, NVID FK, VaiTro); NHANVIEN(NVID PK)</p>

- C (Đúng ✓)

<p>NHANVIEN(NVID PK); DUAN(DID PK); THAMGIA(NVID FK, DID FK, VaiTro, PK(NVID,DID))</p>

- D 

<p>THAMGIA(NVID PK, DID PK, VaiTro)</p>

---

## Câu 3: INT1313_S5_110082

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: ISA (chuyên biệt hoá): Vehicle{VID, Make} với Car{Seats} và Truck{Capacity}. Dạng ánh xạ ‘class‑table’. Chọn lược đồ đúng.</p>

### Đáp án
- A 

<p>VEHICLE(VID PK, Make, Seats, Capacity)</p>

- B (Đúng ✓)

<p>VEHICLE(VID PK, Make); CAR(VID PK/FK→VEHICLE, Seats); TRUCK(VID PK/FK→VEHICLE, Capacity)</p>

- C 

<p>CAR(VID PK, Make, Seats); TRUCK(VID PK, Make, Capacity)</p>

- D 

<p>VEHICLE(VID PK); VEHICLE_TYPE(VID, Type, Seats, Capacity)</p>

---

## Câu 4: INT1313_S5_951775

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: Ternary: Doctor — prescribes — Patient — Medication. Quan hệ ba ngôi có thuộc tính Dose, Date. Chọn ánh xạ đúng.</p>

### Đáp án
- A 

<p>DOCTOR(DoctorID PK); PATIENT(PatientID PK); MED(MedID PK, Dose, Date)</p>

- B (Đúng ✓)

<p>PRESCRIPTION(DoctorID FK, PatientID FK, MedID FK, Dose, Date, PK(DoctorID,PatientID,MedID,Date))</p>

- C 

<p>PRESC(DoctorID, PatientID, PK(DoctorID,PatientID)); MED(MedID PK)</p>

- D 

<p>DOCTOR_PATIENT(DoctorID FK, PatientID FK, PK(DoctorID,PatientID)); PRESC(MedID FK, Dose, Date)</p>

---

## Câu 5: INT1313_S5_122501

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: Supplier(N) — supplies — Part(N) với thuộc tính quan hệ Price. Chọn DDL đúng.</p>

### Đáp án
- A 

<p>SUPPLIER_PART(SID PK, PID PK, Price)</p>

- B 

<p>PART(PID PK, SID FK, Price); SUPPLIER(SID PK)</p>

- C (Đúng ✓)

<p>SUPPLIER(SID PK); PART(PID PK); SUPPLY(SID FK, PID FK, Price, PK(SID,PID))</p>

- D 

<p>SUPPLIER(SID PK, PID FK, Price); PART(PID PK)</p>

---

## Câu 6: INT1313_S5_384733

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: Product có thuộc tính đa trị Tag. Chọn ánh xạ đúng.</p>

### Đáp án
- A 

<p>PRODUCT(PID PK, Tag1, Tag2, Tag3)</p>

- B 

<p>PRODUCT(PID PK, Tags TEXT)</p>

- C (Đúng ✓)

<p>PRODUCT(PID PK, ...); PRODUCT_TAG(PID FK, Tag, PK(PID,Tag))</p>

- D 

<p>TAG(Tag PK); PRODUCT(PID PK, Tag FK)</p>

---

## Câu 7: INT1313_S5_431558

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: Employee(1) — has — Dependent(N) (Dependent là thực thể yếu, phụ thuộc vào Employee). Chọn lược đồ đúng.</p>

### Đáp án
- A 

<p>EMP(EID PK, DepName); DEP(DepName PK, ...)</p>

- B (Đúng ✓)

<p>EMP(EID PK, ...); DEP(EID FK, DepName, BirthDate, PK(EID,DepName))</p>

- C 

<p>EMP(EID PK); EMP_DEP(EID, DepName)</p>

- D 

<p>EMP(EID PK, ...); DEP(DepID PK, EID)</p>

---

## Câu 8: INT1313_S5_322566

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: Department(1) — manages — Project(N). Mỗi Project có DeptID làm chủ quản. Chọn DDL đúng.</p>

### Đáp án
- A 

<p>DEPARTMENT(DeptID PK); PROJECT(ProjectID PK); DEPT_PROJECT(DeptID, ProjectID)</p>

- B 

<p>DEPARTMENT(DeptID PK, ProjectID FK); PROJECT(ProjectID PK, ...)</p>

- C 

<p>PROJECT(ProjectID PK, ...); DEPARTMENT(DeptID PK, ProjectID)</p>

- D (Đúng ✓)

<p>PROJECT(ProjectID PK, DeptID FK REFERENCES DEPARTMENT(DeptID), ...); DEPARTMENT(DeptID PK, ...)</p>

---

## Câu 9: INT1313_S5_527859

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: Student(N) — enrolls — Course(N) (N–N) có thuộc tính EnrollmentDate của quan hệ. Chọn lược đồ quan hệ đúng.</p>

### Đáp án
- A 

<p>STUDENT_COURSE(SID PK, CID PK, EnrollmentDate); COURSE(CID PK)</p>

- B 

<p>STUDENT(SID PK, CID FK); COURSE(CID PK)</p>

- C 

<p>STUDENT(SID PK); COURSE(CID PK, SID FK)</p>

- D (Đúng ✓)

<p>STUDENT(SID PK); COURSE(CID PK); ENROLL(SID FK, CID FK, EnrollmentDate, PK(SID,CID))</p>

---

## Câu 10: INT1313_S5_269395

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>ERD: Customer(1) — places — Order(N). Mỗi Order thuộc đúng 1 Customer. Chọn lược đồ quan hệ đúng.</p>

### Đáp án
- A 

<p>ORDER(OrderID PK, ...); CUSTOMER(CustID PK, OrderID)</p>

- B 

<p>CUSTOMER(CustID PK, OrderID FK); ORDER(OrderID PK, ...)</p>

- C (Đúng ✓)

<p>CUSTOMER(CustID PK, ...); ORDER(OrderID PK, CustID FK→CUSTOMER)</p>

- D 

<p>CUSTOMER(CustID PK, ...); ORDER(OrderID PK); CUST_ORDER(CustID, OrderID)</p>

---

## Câu 11: INT1313_S4_442147

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C), F={AB→C, C→A}. Dạng chuẩn cao nhất của R là?</p>

### Đáp án
- A 

<p>1NF</p>

- B 

<p>2NF nhưng không 3NF</p>

- C (Đúng ✓)

<p>3NF nhưng không BCNF</p>

- D 

<p>BCNF</p>

---

## Câu 12: INT1313_S4_951019

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(E,F,G), F={EF→G, G→E}. Khóa ứng viên là?</p>

### Đáp án
- A (Đúng ✓)

<p>{EF, FG}</p>

- B 

<p>{EG}</p>

- C 

<p>{G}</p>

- D 

<p>{EF}</p>

---

## Câu 13: INT1313_S4_785561

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C,D), F={AB→C, C→D, D→B}. Dạng chuẩn cao nhất của R là?</p>

### Đáp án
- A 

<p>1NF</p>

- B 

<p>2NF nhưng không 3NF</p>

- C (Đúng ✓)

<p>3NF nhưng không BCNF</p>

- D 

<p>BCNF</p>

---

## Câu 14: INT1313_S4_752865

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C,D), F={A→B, B→C, C→D, D→A}. Tập khóa ứng viên là?</p>

### Đáp án
- A (Đúng ✓)

<p>{A,B,C,D} (các khóa đơn)</p>

- B 

<p>{A}</p>

- C 

<p>{AB}</p>

- D 

<p>{AD}</p>

---

## Câu 15: INT1313_S4_498052

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C), F={A→B, C→A}. Khóa ứng viên của R là?</p>

### Đáp án
- A (Đúng ✓)

<p>C</p>

- B 

<p>AC</p>

- C 

<p>AB</p>

- D 

<p>A</p>

---

## Câu 16: INT1313_S4_917067

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C,D), F={A↔B (A→B,B→A), C→D}. Khóa ứng viên là?</p>

### Đáp án
- A (Đúng ✓)

<p>{AC, BC}</p>

- B 

<p>{A}</p>

- C 

<p>{C}</p>

- D 

<p>{AB}</p>

---

## Câu 17: INT1313_S4_305991

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C), F={AB→C, C→B}. Tập khóa ứng viên là?</p>

### Đáp án
- A (Đúng ✓)

<p>{AB, AC}</p>

- B 

<p>{A}</p>

- C 

<p>{C}</p>

- D 

<p>{A,B,C}</p>

---

## Câu 18: INT1313_S4_754329

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C), F={A→B, B→C}. Dạng chuẩn cao nhất của R là?</p>

### Đáp án
- A (Đúng ✓)

<p>2NF nhưng không 3NF</p>

- B 

<p>1NF</p>

- C 

<p>3NF nhưng không BCNF</p>

- D 

<p>BCNF</p>

---

## Câu 19: INT1313_S4_544480

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: multipleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C,D), F={A→B, C→D}. Khóa ứng viên là?</p>

### Đáp án
- A (Đúng ✓)

<p>AC</p>

- B 

<p>A</p>

- C (Đúng ✓)

<p>C</p>

- D 

<p>AD</p>

---

## Câu 20: INT1313_S4_358578

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C), F={A→B, B→C}. Khóa ứng viên của R là?</p>

### Đáp án
- A (Đúng ✓)

<p>A</p>

- B 

<p>AB</p>

- C 

<p>AC</p>

- D 

<p>BC</p>

---

## Câu 21: INT1313_S3_600123

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Tính phân phối đúng của lọc trên hợp:</p>

### Đáp án
- A 

<p>σ_θ(R ∪ S) = σ_θ(R) ∩ σ_θ(S)</p>

- B (Đúng ✓)

<p>σ_θ(R ∪ S) = σ_θ(R) ∪ σ_θ(S)</p>

- C 

<p>σ_θ(R ∪ S) = σ_θ(R) × σ_θ(S)</p>

- D 

<p>Không có tính phân phối</p>

---

## Câu 22: INT1313_S3_743799

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B), S(B,C). Đẳng thức đẩy chiếu đúng:</p>

### Đáp án
- A 

<p>π_{A,C}(R ⋈ S) = (π_A R) ⋈ (π_C S)</p>

- B (Đúng ✓)

<p>π_{A,C}(R ⋈ S) = π_{A,C}((π_{A,B}R) ⋈ (π_{B,C}S))</p>

- C 

<p>π_{A,C}(R × S) = (π_{A,B}R) ⋈ (π_{B,C}S)</p>

- D 

<p>π_{A,C}(R ⋈ S) = (π_A R) × (π_C S)</p>

---

## Câu 23: INT1313_S3_937534

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>RA làm việc theo tập (không trùng lặp). Phép SQL tương ứng với hợp trong RA là:</p>

### Đáp án
- A 

<p>EXCEPT</p>

- B 

<p>INTERSECT</p>

- C (Đúng ✓)

<p>UNION</p>

- D 

<p>UNION ALL</p>

---

## Câu 24: INT1313_S3_830882

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Phát biểu đúng về tính chất idempotent:</p>

### Đáp án
- A (Đúng ✓)

<p>σ_θ(σ_θ(R)) = σ_θ(R)</p>

- B 

<p>π_X(π_Y(R)) = π_Y(R) với mọi X,Y</p>

- C 

<p>σ_θ(R) = R với mọi θ</p>

- D 

<p>π_X(R) = R với mọi X</p>

---

## Câu 25: INT1313_S3_620173

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Mục đích chính của phép đổi tên ρ trong join tự nhiên là:</p>

### Đáp án
- A (Đúng ✓)

<p>Tránh đụng tên thuộc tính trước khi join</p>

- B 

<p>Xóa thuộc tính</p>

- C 

<p>Loại bỏ bộ trùng</p>

- D 

<p>Sắp xếp kết quả</p>

---

## Câu 26: INT1313_S3_294975

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Với R(A,B) và S(B), biểu thức trả về các bộ của R không có B khớp trong S là:</p>

### Đáp án
- A (Đúng ✓)

<p>R − π_{A,B}(R ⋈ S)</p>

- B 

<p>σ_{B ∉ S}(R)</p>

- C 

<p>π_A(R) − π_A(S)</p>

- D 

<p>R ÷ S</p>

---

## Câu 27: INT1313_S3_263890

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Phép chia R(A,B) ÷ S(B) trả về:</p>

### Đáp án
- A 

<p>Tập cặp (A,B) không có trong S</p>

- B 

<p>Tập các A xuất hiện với ít nhất một B trong S</p>

- C 

<p>Tập các giá trị B xuất hiện với mọi A trong R</p>

- D (Đúng ✓)

<p>Tập giá trị A xuất hiện với mọi giá trị B trong S</p>

---

## Câu 28: INT1313_S3_421487

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Định nghĩa đúng của theta-join: R ⋈_θ S = ?</p>

### Đáp án
- A 

<p>σ_θ(R) ∪ σ_θ(S)</p>

- B (Đúng ✓)

<p>σ_θ(R × S)</p>

- C 

<p>π_θ(R × S)</p>

- D 

<p>σ_θ(R) × S</p>

---

## Câu 29: INT1313_S3_661372

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Tính chất kết hợp của natural join đúng là:</p>

### Đáp án
- A 

<p>(R × S) ⋈ T = R × (S ⋈ T)</p>

- B (Đúng ✓)

<p>(R ⋈ S) ⋈ T = R ⋈ (S ⋈ T)</p>

- C 

<p>Không có tính kết hợp</p>

- D 

<p>(R ⋈ S) × T = R ⋈ (S × T)</p>

---

## Câu 30: INT1313_S3_086199

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Với quan hệ E, mệnh đề tương đương nào đúng? σ_{age>30}(σ_{dept='IT'}(E)) = ?</p>

### Đáp án
- A 

<p>π_{age,dept}(E)</p>

- B 

<p>σ_{age>30}(E) × σ_{dept='IT'}(E)</p>

- C 

<p>σ_{age>30}(E) ∪ σ_{dept='IT'}(E)</p>

- D (Đúng ✓)

<p>σ_{age>30 ∧ dept='IT'}(E)</p>

---

## Câu 31: INT1313_S2_806318

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={AB→C, C→E, E→D}. Tính (AB)⁺.</p>

### Đáp án
- A 

<p>{A,B,C}</p>

- B 

<p>{A,B,C,E}</p>

- C (Đúng ✓)

<p>{A,B,C,E,D}</p>

- D 

<p>{A,B,D}</p>

---

## Câu 32: INT1313_S2_653576

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C, C→A}. Tính A⁺.</p>

### Đáp án
- A 

<p>{A}</p>

- B 

<p>{A,B}</p>

- C (Đúng ✓)

<p>{A,B,C}</p>

- D 

<p>{B,C}</p>

---

## Câu 33: INT1313_S2_757772

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C, AC→D}. Mệnh đề nào đúng?</p>

### Đáp án
- A (Đúng ✓)

<p>A→D</p>

- B 

<p>C→D</p>

- C 

<p>B→D</p>

- D 

<p>D→A</p>

---

## Câu 34: INT1313_S2_509128

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→BC, B→A}. Tính A⁺.</p>

### Đáp án
- A 

<p>{A}</p>

- B 

<p>{A,B}</p>

- C (Đúng ✓)

<p>{A,B,C}</p>

- D 

<p>{B,C}</p>

---

## Câu 35: INT1313_S2_975879

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C, CD→E}. Tính (AD)⁺.</p>

### Đáp án
- A 

<p>{A,D}</p>

- B 

<p>{A,B,C,D}</p>

- C (Đúng ✓)

<p>{A,B,C,D,E}</p>

- D 

<p>{A,C,D,E}</p>

---

## Câu 36: INT1313_S2_370318

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C, D→E, CE→F}. Tính (AD)⁺.</p>

### Đáp án
- A 

<p>{A,D}</p>

- B 

<p>{A,B,C,D}</p>

- C (Đúng ✓)

<p>{A,B,C,D,E,F}</p>

- D 

<p>{A,B,D,E}</p>

---

## Câu 37: INT1313_S2_525097

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C, C→D}. Chọn phát biểu đúng.</p>

### Đáp án
- A (Đúng ✓)

<p>A→D</p>

- B 

<p>D→A</p>

- C 

<p>AB→D là sai</p>

- D 

<p>B→A</p>

---

## Câu 38: INT1313_S2_554323

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={AB→C, C→D, D→E}. Mệnh đề nào không suy ra từ F?</p>

### Đáp án
- A 

<p>AB→D</p>

- B 

<p>AB→E</p>

- C (Đúng ✓)

<p>A→E</p>

- D 

<p>C→E</p>

---

## Câu 39: INT1313_S2_408856

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, C→D}. Tính (AC)⁺.</p>

### Đáp án
- A 

<p>{A,C}</p>

- B 

<p>{A,C,D}</p>

- C (Đúng ✓)

<p>{A,B,C,D}</p>

- D 

<p>{B,C}</p>

---

## Câu 40: INT1313_S2_245376

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C}. Tính (BC)⁺.</p>

### Đáp án
- A (Đúng ✓)

<p>{B,C}</p>

- B 

<p>{A,B,C}</p>

- C 

<p>{C}</p>

- D 

<p>{B}</p>

---

## Câu 41: INT1313_S2_421579

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→D, D→E}. Kết luận nào đúng?</p>

### Đáp án
- A (Đúng ✓)

<p>A→E</p>

- B 

<p>E→A</p>

- C 

<p>D→B</p>

- D 

<p>AB→D</p>

---

## Câu 42: INT1313_S2_795222

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={AB→C, C→A}. Phụ thuộc nào đúng?</p>

### Đáp án
- A 

<p>B→A</p>

- B (Đúng ✓)

<p>AB→A</p>

- C 

<p>C→B</p>

- D 

<p>A→B</p>

---

## Câu 43: INT1313_S2_222417

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→BC, B→D, C→E}. Tính A⁺.</p>

### Đáp án
- A 

<p>{A,B,C}</p>

- B 

<p>{A,B,C,D}</p>

- C (Đúng ✓)

<p>{A,B,C,D,E}</p>

- D 

<p>{A,D,E}</p>

---

## Câu 44: INT1313_S2_211626

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C}. Tính (AB)⁺.</p>

### Đáp án
- A 

<p>{A,B}</p>

- B (Đúng ✓)

<p>{A,B,C}</p>

- C 

<p>{A}</p>

- D 

<p>{B,C}</p>

---

## Câu 45: INT1313_S2_621047

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C, AC→D}. Mệnh đề nào đúng?</p>

### Đáp án
- A 

<p>A↛C</p>

- B (Đúng ✓)

<p>A→C</p>

- C 

<p>C→A</p>

- D 

<p>D→A</p>

---

## Câu 46: INT1313_S2_757230

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, A→C, B→D}. Bộ phủ tối thiểu tương đương là?</p>

### Đáp án
- A (Đúng ✓)

<p>{A→BC, B→D}</p>

- B 

<p>{A→B, B→D}</p>

- C 

<p>{A→C, B→D}</p>

- D 

<p>{AB→CD}</p>

---

## Câu 47: INT1313_S2_434108

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={AB→C, C→D, D→A}. Tính (AB)⁺.</p>

### Đáp án
- A 

<p>{A,B}</p>

- B 

<p>{A,B,C}</p>

- C (Đúng ✓)

<p>{A,B,C,D}</p>

- D 

<p>{B,C,D}</p>

---

## Câu 48: INT1313_S2_299621

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Với F={A→BC, C→D, D→E}. Tính A⁺.</p>

### Đáp án
- A 

<p>{A,B,C}</p>

- B (Đúng ✓)

<p>{A,B,C,D,E}</p>

- C 

<p>{A,B,D}</p>

- D 

<p>{A,C,E}</p>

---

## Câu 49: INT1313_S2_476601

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Với F={A→B, B→C}. Phụ thuộc nào không được suy ra?</p>

### Đáp án
- A 

<p>A→C</p>

- B 

<p>AB→C</p>

- C 

<p>A→B</p>

- D (Đúng ✓)

<p>C→A</p>

---

## Câu 50: INT1313_S2_137848

- Danh mục: Phụ thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Với F={A→B, B→C}. Phụ thuộc nào được suy ra từ F?</p>

### Đáp án
- A (Đúng ✓)

<p>A→C</p>

- B 

<p>C→A</p>

- C 

<p>AB→A</p>

- D 

<p>C→B</p>

---

## Câu 51: INT1313_S1_798629

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho mô tả: “Một khoa có nhiều lớp học, mỗi lớp học thuộc một khoa”. Khi chuyển sang mô hình quan hệ, khóa ngoại sẽ đặt ở đâu?</p>

### Đáp án
- A 

<p>Đặt trong bảng Khoa</p>

- B (Đúng ✓)

<p>Đặt trong bảng Lớp</p>

- C 

<p>Đặt trong bảng trung gian</p>

- D 

<p>Không cần khóa ngoại</p>

---

## Câu 52: INT1313_S1_681223

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Nếu thực thể NHÂN_VIÊN có thuộc tính PhụThuộc (chứa thông tin người thân của nhân viên), mô hình đúng là:</p>

### Đáp án
- A 

<p>PhụThuộc là thực thể riêng, có quan hệ 1–N với Nhân viên</p>

- B 

<p>PhụThuộc là thuộc tính của Nhân viên</p>

- C 

<p>PhụThuộc là thuộc tính đa trị</p>

- D (Đúng ✓)

<p>Cả 1 và 3 đều đúng tùy mục đích</p>

---

## Câu 53: INT1313_S1_232719

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Trong mô hình ERD, thực thể yếu (weak entity) được xác định bởi:</p>

### Đáp án
- A (Đúng ✓)

<p>Không có thuộc tính khóa riêng</p>

- B 

<p>Có thuộc tính khóa riêng</p>

- C 

<p>Chỉ có quan hệ 1–1</p>

- D 

<p>Có thuộc tính đa trị</p>

---

## Câu 54: INT1313_S1_932746

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho hình ERD mô tả mối quan hệ sau: https://i.imgur.com/9F5yZ1r.png – Hỏi đây là loại mối quan hệ nào? (Mỗi nhân viên có thể tham gia nhiều dự án, mỗi dự án có nhiều nhân viên)</p>

### Đáp án
- A 

<p>1–1</p>

- B 

<p>1–N</p>

- C (Đúng ✓)

<p>N–N</p>

- D 

<p>Tự liên kết</p>

---

## Câu 55: INT1313_S1_194228

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Thuộc tính “Tuổi” được tính từ “Ngày sinh” là loại thuộc tính gì trong ERD?</p>

### Đáp án
- A 

<p>Đơn trị</p>

- B 

<p>Tổng hợp</p>

- C (Đúng ✓)

<p>Dẫn xuất</p>

- D 

<p>Đa trị</p>

---

## Câu 56: INT1313_S1_254790

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho lược đồ ERD mô tả: “Một khách hàng có thể có nhiều đơn hàng; mỗi đơn hàng thuộc về đúng một khách hàng.” Quan hệ nào đúng?</p>

### Đáp án
- A (Đúng ✓)

<p>KHÁCH_HÀNG(1) – ĐƠN_HÀNG(N)</p>

- B 

<p>KHÁCH_HÀNG(N) – ĐƠN_HÀNG(1)</p>

- C 

<p>KHÁCH_HÀNG(1) – ĐƠN_HÀNG(1)</p>

- D 

<p>KHÁCH_HÀNG(N) – ĐƠN_HÀNG(N)</p>

---

## Câu 57: INT1313_S1_125275

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Trong mô hình ERD, thuộc tính đa trị được biểu diễn bằng:</p>

### Đáp án
- A (Đúng ✓)

<p>Hình elip đôi</p>

- B 

<p>Hình chữ nhật</p>

- C 

<p>Hình thoi</p>

- D 

<p>Hình elip nét đứt</p>

---

## Câu 58: INT1313_S1_440513

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Mối quan hệ “Khoa – Trưởng khoa” (một khoa có đúng một trưởng khoa, một giảng viên chỉ có thể làm trưởng cho một khoa) là loại quan hệ gì?</p>

### Đáp án
- A 

<p>1–N</p>

- B (Đúng ✓)

<p>1–1</p>

- C 

<p>N–N</p>

- D 

<p>Tự liên kết</p>

---

## Câu 59: INT1313_S1_274139

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Trong lược đồ ERD, thuộc tính Số CMND của thực thể Giảng viên là duy nhất cho mỗi giảng viên. Số CMND được biểu diễn là loại thuộc tính gì?</p>

### Đáp án
- A 

<p>Thuộc tính đa trị</p>

- B (Đúng ✓)

<p>Thuộc tính khóa</p>

- C 

<p>Thuộc tính dẫn xuất</p>

- D 

<p>Thuộc tính tổng hợp</p>

---

## Câu 60: INT1313_S1_309055

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Một sinh viên có thể học nhiều môn học, và mỗi môn học có thể được nhiều sinh viên đăng ký. Mối quan hệ giữa SinhVien và MonHoc là gì?</p>

### Đáp án
- A 

<p>1–1</p>

- B 

<p>1–N</p>

- C 

<p>N–1</p>

- D (Đúng ✓)

<p>N–N</p>

