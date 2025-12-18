# DB PTIT - Tổng hợp câu hỏi Questions

- **Tổng số câu hỏi**: 206

---

## Câu 1: INT1313_DB_000030

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Supplier has a multivalued attribute ContactPhone (PhoneType, PhoneNumber). There is a ternary relationship "Supplies" among Supplier, Part, and Warehouse with a multivalued attribute ShipmentRecord (ShipDate, Quantity, TransportMethod). The correct mapping to the relational model is: </p><p>(Supplier có thuộc tính đa trị ContactPhone (PhoneType, PhoneNumber). Có quan hệ tam phân "Supplies" giữa Supplier, Part, và Warehouse với thuộc tính đa trị ShipmentRecord (ShipDate, Quantity, TransportMethod). Ánh xạ đúng sang mô hình quan hệ là:)</p>

### Đáp án
- A (Đúng ✓)

<p>SUPPLIER(SupplierID PK, Name) </p><p>SUPPLIER_PHONE(SupplierID FK, PhoneType, PhoneNumber, PK(SupplierID, PhoneNumber)) </p><p>PART(PartID PK, PartName) </p><p>WAREHOUSE(WarehouseID PK, Location) </p><p>SUPPLIES(SupplierID FK, PartID FK, WarehouseID FK, PK(SupplierID, PartID, WarehouseID)) </p><p>SHIPMENT(SupplierID FK, PartID FK, WarehouseID FK, ShipDate, Quantity, TransportMethod, FK(SupplierID, PartID, WarehouseID)→SUPPLIES, PK(SupplierID, PartID, WarehouseID, ShipDate))</p>

- B 

<p>SUPPLIER(SupplierID PK, Name, ContactPhones TEXT) </p><p>PART(PartID PK, PartName) </p><p>WAREHOUSE(WarehouseID PK, Location) </p><p>SUPPLIES(SupplierID FK, PartID FK, WarehouseID FK, ShipmentRecords TEXT, PK(SupplierID, PartID, WarehouseID))</p>

- C 

<p>SUPPLIER(SupplierID PK, Name) </p><p>SUPPLIER_PHONE(SupplierID FK, PhoneType, PhoneNumber, PK(SupplierID, PhoneType)) </p><p>PART(PartID PK, PartName) </p><p>WAREHOUSE(WarehouseID PK, Location) </p><p>SUPPLIES(SupplierID FK, PartID FK, WarehouseID FK, ShipDate, Quantity, TransportMethod, PK(SupplierID, PartID, WarehouseID, ShipDate))</p>

- D 

<p>SUPPLIER(SupplierID PK, Name) </p><p>PHONE(PhoneType, PhoneNumber, SupplierID FK, PK(PhoneType, PhoneNumber)) </p><p>PART(PartID PK, PartName) WAREHOUSE(WarehouseID PK, Location) </p><p>SUPPLIES(SupplierID, PartID, WarehouseID, PK(SupplierID, PartID, WarehouseID)) </p><p>SHIPMENT(ShipDate, Quantity, TransportMethod, SupplierID FK, PartID FK, WarehouseID FK, PK(ShipDate))</p>

---

## Câu 2: INT1313_DB_000029

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given the following ERD, which mapping is correct? ( Cho lược đồ ERD. Ánh xạ đúng là: )<img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/1850b896-4785-43d5-afa6-09cc38820e9e/1765633332448_De_B.29.png"></p><p><br></p>

### Đáp án
- A 

<p>PERSON(PID PK, Name, DOB)</p><p>STUDENT(PID PK/FK→PERSON, Major, GPA)</p><p>EMPLOYEE(PID PK/FK→PERSON, Salary, HireDate)</p><p>STUDENT_EMPLOYEE(PID PK/FK→PERSON, Major, GPA, Salary, HireDate, WorkHours)</p>

- B 

<p>PERSON(PID PK, Name, DOB)</p><p>STUDENT(SID PK, PID FK, Major, GPA)</p><p>EMPLOYEE(EID PK, PID FK, Salary, HireDate)</p><p>STUDENT_EMPLOYEE(SEID PK, SID FK, EID FK, WorkHours)</p>

- C 

<p>PERSON(PID PK, Name, DOB, Major, GPA, Salary, HireDate, WorkHours)</p>

- D (Đúng ✓)

<p>PERSON(PID PK, Name, DOB)</p><p>STUDENT(PID PK/FK→PERSON, Major, GPA)</p><p>EMPLOYEE(PID PK/FK→PERSON, Salary, HireDate)</p><p>STUDENT_EMPLOYEE(PID PK, FK(PID)→STUDENT, FK(PID)→EMPLOYEE, WorkHours)</p>

---

## Câu 3: INT1313_DB_000028

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given the following ERD, which mapping is correct? ( Cho lược đồ ERD. Ánh xạ đúng là: )</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/ff4c98b1-d0f7-4c66-b989-4e182a1d0ff4/1765633227238_De_B.28.png"></p><p><br></p>

### Đáp án
- A 

<p>COMPANY(CompID PK)</p><p>EMPLOYEE(CompID FK, EmpID, PK(CompID, EmpID))</p><p>DEPENDENT(CompID FK, EmpID FK, DepName, PK(CompID, EmpID, DepName))</p><p>INSURANCE(CompID FK, EmpID FK, DepName FK, InsuranceType, PK(CompID, EmpID, DepName, InsuranceType))</p>

- B 

<p>COMPANY(CompID PK)</p><p>EMPLOYEE(CompID, EmpID, PK(CompID, EmpID))</p><p>DEPENDENT(CompID, EmpID, DepName, PK(CompID, EmpID, DepName))</p><p>INSURANCE(CompID , EmpID, DepName, InsuranceType, PK(CompID, EmpID, DepName, InsuranceType))</p>

- C 

<p>COMPANY(CompID PK)</p><p>EMPLOYEE(CompID FK→COMPANY, EmpID, PK(CompID, EmpID))</p><p>DEPENDENT(CompID, EmpID, DepName, FK(CompID,EmpID)→EMPLOYEE, PK(EmpID, DepName))</p><p>INSURANCE(CompID, EmpID, DepName, InsuranceType, FK(CompID,EmpID,DepName)→DEPENDENT, PK(DepName, InsuranceType))</p>

- D (Đúng ✓)

<p>COMPANY(CompID PK)</p><p>EMPLOYEE(CompID FK→COMPANY, EmpID, PK(CompID, EmpID))</p><p>DEPENDENT(CompID, EmpID, DepName, FK(CompID,EmpID)→EMPLOYEE, PK(CompID, EmpID, DepName))</p><p>INSURANCE(CompID, EmpID, DepName, InsuranceType, FK(CompID,EmpID,DepName)→DEPENDENT, PK(CompID, EmpID, DepName, InsuranceType))</p>

---

## Câu 4: INT1313_DB_000027

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given the following ERD, which mapping is correct? ( Cho lược đồ ERD. Ánh xạ đúng là: )</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/cec3035a-6b41-4e01-89b8-e8b9d41ecc1c/1765633103513_De_B.27.png"></p><p><br></p>

### Đáp án
- A 

<p>EMPLOYEE(EmpID PK, Name);</p><p>PROJECT(ProjectID PK, Title, OfficeID FK→OFFICE); OFFICE(OfficeID PK, Location);</p><p>WORKS_ON(EmpID FK, ProjectID FK, OfficeID FK, StartDate, EndDate, Role, PK(EmpID, ProjectID, OfficeID))</p>

- B 

<p>EMPLOYEE(EmpID PK, Name);</p><p>PROJECT(ProjectID PK, Title, OfficeID FK→OFFICE NOT NULL);</p><p>OFFICE(OfficeID PK, Location);</p><p>WORKS_ON(EmpID FK, ProjectID FK, PK(EmpID, ProjectID));</p><p>ASSIGNMENT(EmpID FK, ProjectID FK, StartDate, EndDate, Role, PK(EmpID, ProjectID, StartDate))</p>

- C 

<p>EMPLOYEE(EmpID PK, Name); PROJECT(ProjectID PK, Title);</p><p>OFFICE(OfficeID PK, Location, ProjectID FK→PROJECT NOT NULL);</p><p>WORKS_ON(EmpID FK, ProjectID FK, Assignment TEXT, PK(EmpID, ProjectID))</p>

- D (Đúng ✓)

<p>EMPLOYEE(EmpID PK, Name);</p><p>PROJECT(ProjectID PK, Title, OfficeID FK→OFFICE NOT NULL);</p><p>OFFICE(OfficeID PK, Location);</p><p>WORKS_ON(EmpID FK→EMPLOYEE, ProjectID FK→PROJECT, StartDate, EndDate, Role, PK(EmpID, ProjectID))</p>

---

## Câu 5: INT1313_DB_000026

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given the following ERD, which mapping is correct? ( Cho lược đồ ERD. Ánh xạ đúng là: )<img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/e1e7a301-e917-49f6-b90d-0d8a91624146/1765632954471_De_B.26.png"></p><p><br></p>

### Đáp án
- A 

<p>HOSPITAL(HospitalID PK, Name);</p><p>PATIENT(PatientID PK, Name, HospitalID FK→HOSPITAL NOT NULL, DiseaseID FK→DISEASE NOT NULL);</p><p>DISEASE(DiseaseID PK, Name)</p>

- B 

<p>HOSPITAL(HospitalID PK, Name, PatientID FK);</p><p>PATIENT(PatientID PK, Name, DiseaseID FK);</p><p>DISEASE(DiseaseID PK, Name);</p><p>DIAGNOSED_WITH(PatientID FK, DiseaseID FK, PK(PatientID, DiseaseID))</p>

- C 

<p>HOSPITAL(HospitalID PK, Name);</p><p>PATIENT(PatientID PK, Name, HospitalID FK→HOSPITAL);</p><p>DISEASE(DiseaseID PK, Name);</p><p>DIAGNOSED_WITH(PatientID FK→PATIENT, DiseaseID FK→DISEASE, HospitalID FK→HOSPITAL, PK(PatientID, DiseaseID))</p>

- D (Đúng ✓)

<p>HOSPITAL(HospitalID PK, Name);</p><p>PATIENT(PatientID PK, Name, HospitalID FK→HOSPITAL NOT NULL);</p><p>DISEASE(DiseaseID PK, Name);</p><p>DIAGNOSED_WITH(PatientID FK→PATIENT, DiseaseID FK→DISEASE, PK(PatientID, DiseaseID))</p>

---

## Câu 6: INT1313_DB_000025

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Let R(A,B,C,D) with F = {A→B, B→C}. Which of the following is a correct BCNF decomposition of R? (Cho R(A,B,C,D) với F = {A→B, B→C}. Phương án nào sau đây là một phép phân rã đúng về chuẩn BCNF?)</p>

### Đáp án
- A 

<p>{ R1(A,B,D), R2(B,C) }</p>

- B (Đúng ✓)

<p>{ R1(B,C), R2(A,B), R3(A,D) }</p>

- C 

<p>{ R1(A,B,C), R2(A,D) }</p>

- D 

<p>{ R1(A,B), R2(B,C), R3(C,D) }</p>

---

## Câu 7: INT1313_DB_000024

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given R(StudentID, CourseID, Instructor, InstructorOffice) with FDs: (StudentID,CourseID)→Instructor and Instructor→InstructorOffice. Assume R is in 1NF. What is the highest normal form of R? (Cho R(StudentID, CourseID, Instructor, InstructorOffice) với các FD: (StudentID,CourseID)→Instructor và Instructor→InstructorOffice. Giả sử R ở 1NF. Dạng chuẩn cao nhất của R là gì?)</p>

### Đáp án
- A 

<p>1NF only</p>

- B 

<p>3NF</p>

- C (Đúng ✓)

<p>2NF</p>

- D 

<p>BCNF</p>

---

## Câu 8: INT1313_DB_000023

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Let R(A,B,C,D) with F = {A→B, B→C, A→D}. Assume R is in 1NF. What is the highest normal form of R? (Cho R(A,B,C,D) với F = {A→B, B→C, A→D}. Giả sử R đang ở 1NF. Dạng chuẩn cao nhất của R là gì?)</p>

### Đáp án
- A 

<p>3NF (but not BCNF)</p>

- B 

<p>BCNF</p>

- C 

<p>1NF only</p>

- D (Đúng ✓)

<p>2NF (but not 3NF)</p>

---

## Câu 9: INT1313_DB_000022

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Let R(A,B,C,D) with F = {A→B, B→A, C→D}. Which of the following is a candidate key of R? (Cho R(A,B,C,D) với F = {A→B, B→A, C→D}. Tập thuộc tính nào sau đây là một khóa ứng viên của R?)</p>

### Đáp án
- A 

<p>C</p>

- B (Đúng ✓)

<p>AC</p>

- C 

<p>AB</p>

- D 

<p>BCD</p>

---

## Câu 10: INT1313_DB_000021

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Let R(A,B,C,D,E) with F = {E→A, A→BC, CD→E}. Which of the following is a candidate key of R? (Cho R(A,B,C,D,E) với F = {E→A, A→BC, CD→E}. Tập thuộc tính nào sau đây là một khóa ứng viên của R?)</p>

### Đáp án
- A 

<p>AE</p>

- B 

<p>CE</p>

- C (Đúng ✓)

<p>CD</p>

- D 

<p>BE</p>

---

## Câu 11: INT1313_DB_000020

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given STUDENT(SID, Major), COURSE(CID, Title, Dept), ENROLL(SID, CID). Retrieve Titles of courses in Dept being 'CS' that were not enrolled by any student with Major being 'CS'. Which expression is correct? (Cho STUDENT(SID, Major), COURSE(CID, Title, Dept), ENROLL(SID, CID). Lấy Title của các môn thuộc Dept có giá trị là 'CS' mà không có sinh viên với Major là 'CS' nào đăng ký. Biểu thức đúng là?)</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{Title}(σ_{Dept='CS'}(COURSE)) − π_{Title}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ COURSE)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(σ_{Dept='CS'}(COURSE)) − π_{Title}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ COURSE)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- B (Đúng ✓)

<p><span class="ql-formula" data-value="π_{Title}(σ_{Dept='CS'}(COURSE)) − π_{Title}(σ_{Dept='CS'}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(σ_{Dept='CS'}(COURSE)) − π_{Title}(σ_{Dept='CS'}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="π_{Title}(σ_{Dept='CS' ∧ Major='CS'}(COURSE ⋈ ENROLL ⋈ STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>∧</mo><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(σ_{Dept='CS' ∧ Major='CS'}(COURSE ⋈ ENROLL ⋈ STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mbin mtight">∧</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{Title}(σ_{Dept='CS'}(COURSE ⋈ ENROLL)) − π_{Title}(σ_{Major='CS'}(STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(σ_{Dept='CS'}(COURSE ⋈ ENROLL)) − π_{Title}(σ_{Major='CS'}(STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 12: INT1313_DB_000019

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given COURSE(CID, Title), ENROLL(SID, CID), and assume course titles are unique. Retrieve SIDs of students who enrolled in BOTH courses titled 'Database' and 'AI'. Which expression is correct? (Cho COURSE(CID, Title), ENROLL(SID, CID), và giả sử Title là duy nhất. Lấy SID của sinh viên đã đăng ký CẢ HAI môn có Title là 'Database' và 'AI'. Biểu thức đúng là?)</p>

### Đáp án
- A (Đúng ✓)

<p><span class="ql-formula" data-value="π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∩ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>∩</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>A</mi><msup><mi>I</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∩ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∩</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight">A</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∪ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>∪</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>A</mi><msup><mi>I</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∪ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight">A</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="π_{SID}(σ_{Title='Database' ∧ Title='AI'}(ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>∧</mo><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>A</mi><msup><mi>I</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(σ_{Title='Database' ∧ Title='AI'}(ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mbin mtight">∧</span><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight">A</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{SID}(ENROLL) − (π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∩ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE)))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>∩</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>A</mi><msup><mi>I</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(ENROLL) − (π_{SID}(ENROLL ⋈ σ_{Title='Database'}(COURSE)) ∩ π_{SID}(ENROLL ⋈ σ_{Title='AI'}(COURSE)))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∩</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight">A</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">)))</span></span></span></span></span>﻿</span></p>

---

## Câu 13: INT1313_DB_000018

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given STUDENT(SID, Name, Major, GPA), COURSE(CID, Title, Dept), ENROLL(SID, CID, Semester, Grade). Retrieve Names of students majoring in 'CS' who enrolled in at least one course offered by 'CS' Dept. Which expression is correct? (Cho STUDENT(SID, Name, Major, GPA), COURSE(CID, Title, Dept), ENROLL(SID, CID, Semester, Grade). Lấy Name của sinh viên ngành 'CS' và đã đăng ký ít nhất một môn thuộc Dept có giá trị là 'CS'. Biểu thức đúng là?)</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{Name}(σ_{Major='CS'}(STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{Major='CS'}(STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="π_{Name}(σ_{Dept='CS'}(COURSE ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{Dept='CS'}(COURSE ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C (Đúng ✓)

<p><span class="ql-formula" data-value="π_{Name}(σ_{Major='CS' ∧ Dept='CS'}(STUDENT ⋈ ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>∧</mo><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{Major='CS' ∧ Dept='CS'}(STUDENT ⋈ ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mbin mtight">∧</span><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{Name}(σ_{Major='CS'}(STUDENT)) − π_{Name}(σ_{Dept='CS'}(COURSE ⋈ ENROLL ⋈ STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{Major='CS'}(STUDENT)) − π_{Name}(σ_{Dept='CS'}(COURSE ⋈ ENROLL ⋈ STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 14: INT1313_DB_000017

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given COURSE(CID, Title, Dept, Credits), ENROLL(SID, CID, Semester, Grade). Retrieve CIDs of courses in 'CS' Dept that have at least one enrollment record in '2025_Fall' Semester. Which expression is correct? (Cho COURSE(CID, Title, Dept, Credits), ENROLL(SID, CID, Semester, Grade). Lấy CID của các môn thuộc 'CS' Dept có ít nhất một bản ghi đăng ký trong '2025_Fall' Semester. Biểu thức đúng là?)</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{CID}(σ_{Semester='2025_Fall'}(COURSE ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>S</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>e</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mn>202</mn><msub><mn>5</mn><mi>F</mi></msub><mi>a</mi><mi>l</mi><msup><mi>l</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{CID}(σ_{Semester='2025_Fall'}(COURSE ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0003em; vertical-align: -0.2503em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight">es</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">er</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mtight">202</span><span class="mord mtight"><span class="mord mtight">5</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: 0em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">F</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">l</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">l</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2503em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="π_{CID}(σ_{Dept='CS'}(COURSE)) − π_{CID}(σ_{Semester='2025_Fall'}(ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>S</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>e</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mn>202</mn><msub><mn>5</mn><mi>F</mi></msub><mi>a</mi><mi>l</mi><msup><mi>l</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{CID}(σ_{Dept='CS'}(COURSE)) − π_{CID}(σ_{Semester='2025_Fall'}(ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0003em; vertical-align: -0.2503em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight">es</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">er</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mtight">202</span><span class="mord mtight"><span class="mord mtight">5</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: 0em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">F</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">l</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">l</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2503em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C (Đúng ✓)

<p><span class="ql-formula" data-value="π_{CID}(σ_{Dept='CS' ∧ Semester='2025_Fall'}(COURSE ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>∧</mo><mi>S</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>e</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mn>202</mn><msub><mn>5</mn><mi>F</mi></msub><mi>a</mi><mi>l</mi><msup><mi>l</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{CID}(σ_{Dept='CS' ∧ Semester='2025_Fall'}(COURSE ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mbin mtight">∧</span><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight">es</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">er</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mtight">202</span><span class="mord mtight"><span class="mord mtight">5</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: 0em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">F</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">l</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">l</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{CID}(σ_{Dept='CS'}(COURSE)) ∩ π_{CID}(σ_{Semester='2025_Fall'}(ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>∩</mo><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>S</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>e</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mn>202</mn><msub><mn>5</mn><mi>F</mi></msub><mi>a</mi><mi>l</mi><msup><mi>l</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{CID}(σ_{Dept='CS'}(COURSE)) ∩ π_{CID}(σ_{Semester='2025_Fall'}(ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∩</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0003em; vertical-align: -0.2503em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight">es</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">er</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mtight">202</span><span class="mord mtight"><span class="mord mtight">5</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: 0em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">F</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">l</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">l</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2503em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 15: INT1313_DB_000016

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Given STUDENT(SID, Name, Major, GPA), ENROLL(SID, CID, Semester, Grade). Retrieve (SID, Name) of students with GPA greater than or equal to 3.2 who enrolled in '2025_Spring' Semester. Which relational algebra expression is correct? (Cho STUDENT(SID, Name, Major, GPA), ENROLL(SID, CID, Semester, Grade). Lấy (SID, Name) của sinh viên có GPA lớn hơn hoặc bằng 3.2 và có đăng ký học trong học kỳ  '2025_Spring' Semester. Biểu thức đại số quan hệ nào đúng?)</p>

### Đáp án
- A (Đúng ✓)

<p><span class="ql-formula" data-value="π_{SID,Name}(σ_{GPA≥3.2 ∧ Semester='2025_Spring'}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>≥</mo><mn>3.2</mn><mo>∧</mo><mi>S</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>e</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mn>202</mn><msub><mn>5</mn><mi>S</mi></msub><mi>p</mi><mi>r</mi><mi>i</mi><mi>n</mi><msup><mi>g</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,Name}(σ_{GPA≥3.2 ∧ Semester='2025_Spring'}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">≥</span><span class="mord mtight">3.2</span><span class="mbin mtight">∧</span><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight">es</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">er</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mtight">202</span><span class="mord mtight"><span class="mord mtight">5</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: 0em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">r</span><span class="mord mathnormal mtight">in</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0359em;">g</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="σ_{GPA≥3.2 ∧ Semester='2025_Spring'}(π_{SID,Name}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>≥</mo><mn>3.2</mn><mo>∧</mo><mi>S</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>e</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mn>202</mn><msub><mn>5</mn><mi>S</mi></msub><mi>p</mi><mi>r</mi><mi>i</mi><mi>n</mi><msup><mi>g</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{GPA≥3.2 ∧ Semester='2025_Spring'}(π_{SID,Name}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">≥</span><span class="mord mtight">3.2</span><span class="mbin mtight">∧</span><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight">es</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">er</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mtight">202</span><span class="mord mtight"><span class="mord mtight">5</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: 0em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">r</span><span class="mord mathnormal mtight">in</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0359em;">g</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="π_{SID,Name}(σ_{Semester='2025_Spring'}(STUDENT) ⋈ σ_{GPA≥3.2}(ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>S</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>e</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mn>202</mn><msub><mn>5</mn><mi>S</mi></msub><mi>p</mi><mi>r</mi><mi>i</mi><mi>n</mi><msup><mi>g</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>≥</mo><mn>3.2</mn></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,Name}(σ_{Semester='2025_Spring'}(STUDENT) ⋈ σ_{GPA≥3.2}(ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight">es</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">er</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mtight">202</span><span class="mord mtight"><span class="mord mtight">5</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: 0em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">r</span><span class="mord mathnormal mtight">in</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0359em;">g</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">≥</span><span class="mord mtight">3.2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2452em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{SID,Name}(σ_{GPA≥3.2}(STUDENT) ⋈ σ_{Semester='2025_Spring'}(COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>≥</mo><mn>3.2</mn></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>S</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>s</mi><mi>t</mi><mi>e</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mn>202</mn><msub><mn>5</mn><mi>S</mi></msub><mi>p</mi><mi>r</mi><mi>i</mi><mi>n</mi><msup><mi>g</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,Name}(σ_{GPA≥3.2}(STUDENT) ⋈ σ_{Semester='2025_Spring'}(COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">≥</span><span class="mord mtight">3.2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2452em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight">m</span><span class="mord mathnormal mtight">es</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">er</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mtight">202</span><span class="mord mtight"><span class="mord mtight">5</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: 0em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">r</span><span class="mord mathnormal mtight">in</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0359em;">g</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 16: INT1313_DB_000015

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given R(A,B,C,D,E), F = {A→BC, C→D, D→E}. Which FD set is equivalent to F? (Cho R(A,B,C,D,E), F = {A→BC, C→D, D→E}. Tập FD nào tương đương với F?)</p>

### Đáp án
- A (Đúng ✓)

<p>{A→B, A→C, C→D, D→E}</p>

- B 

<p>{A→BC, C→DE}</p>

- C 

<p>{A→B, B→C, C→D, D→E}</p>

- D 

<p>{A→BC, C→D, E→A}</p>

---

## Câu 17: INT1313_DB_000014

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given R(A,B,C,D,E), F = {A→BC, B→D, A→D, CD→E}. Which FD is redundant in F? (Cho R(A,B,C,D,E), F = {A→BC, B→D, A→D, CD→E}. Phụ thuộc hàm nào dư thừa?)</p>

### Đáp án
- A 

<p>A→BC</p>

- B 

<p>B→D</p>

- C (Đúng ✓)

<p>A→D</p>

- D 

<p>CD→E</p>

---

## Câu 18: INT1313_DB_000013

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Let R(A,B,C,D,E), F = {BD→A, A→C, C→E, E→B}. What is (BD)+? (Cho R(A,B,C,D,E), F = {BD→A, A→C, C→E, E→B}. Bao đóng (BD)+ là:)</p>

### Đáp án
- A 

<p>{A, B, D}</p>

- B 

<p>{A, B, C, D}</p>

- C (Đúng ✓)

<p>{A, B, C, D, E}</p>

- D 

<p>{B, D}</p>

---

## Câu 19: INT1313_DB_000012

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Let R(A,B,C,D). F1 = {A→B, B→C, C→D} and F2 = {A→BC, B→C, C→D}. Which statement is correct? (Cho R(A,B,C,D). F1 = {A→B, B→C, C→D} và F2 = {A→BC, B→C, C→D}. Khẳng định đúng là:)</p>

### Đáp án
- A (Đúng ✓)

<p>F1 ≡ F2</p>

- B 

<p>F1 ⇒ F2 but F2 ⇏ F1</p>

- C 

<p>F2 ⇒ F1 but F1 ⇏ F2</p>

- D 

<p>Neither implies the other</p>

---

## Câu 20: INT1313_DB_000011

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given R(A,B,C,D,E), F = {ABC→D, AB→D, D→E}. Which attribute is extraneous on the LHS of a dependency? (Cho R(A,B,C,D,E), F = {ABC→D, AB→D, D→E}. Thuộc tính nào thừa ở vế trái (có thể bỏ mà vẫn tương đương)?)</p>

### Đáp án
- A 

<p>A in ABC→D</p>

- B 

<p>B in ABC→D</p>

- C (Đúng ✓)

<p>C in ABC→D</p>

- D 

<p>No extraneous attribute</p>

---

## Câu 21: INT1313_DB_000010

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given R(A,B,C,D,E), F = {AB→C, A→C, C→D, AD→E, E→B}. Which canonical cover is equivalent to F? (Cho R(A,B,C,D,E), F = {AB→C, A→C, C→D, AD→E, E→B}. Phủ tối thiểu (canonical cover) tương đương là:)</p>

### Đáp án
- A 

<p>{AB→C, C→D, AD→E, E→B}</p>

- B (Đúng ✓)

<p>{A→C, C→D, AD→E, E→B}</p>

- C 

<p>{A→C, C→D, D→E, E→B}</p>

- D 

<p>{A→C, C→D, AE→B}</p>

---

## Câu 22: INT1313_DB_000009

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given R(A,B,C,D,E), F = {A→BC, B→D, CD→E}. Which non-trivial FD is implied by F? (Cho R(A,B,C,D,E), F = {A→BC, B→D, CD→E}. Phụ thuộc hàm không tầm thường nào suy ra được?)</p>

### Đáp án
- A (Đúng ✓)

<p>A→E</p>

- B 

<p>D→E</p>

- C 

<p>B→E</p>

- D 

<p>E→A</p>

---

## Câu 23: INT1313_DB_000008

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Let R(A,B,C,D,E,F), F = {A→B, BC→D, D→E, CE→F}. What is (AC)+? (Cho R(A,B,C,D,E,F), F = {A→B, BC→D, D→E, CE→F}. Bao đóng (AC)+ là:)</p>

### Đáp án
- A 

<p>{A, B, C, D}</p>

- B 

<p>{A, B, C, E}</p>

- C 

<p>{A, B, C, D, E}</p>

- D (Đúng ✓)

<p>{A, B, C, D, E, F}</p>

---

## Câu 24: INT1313_DB_000007

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Let R(A,B,C,D,E), F = {C→A, AD→B, B→E, CE→D}. What is C+? (Cho R(A,B,C,D,E), F = {C→A, AD→B, B→E, CE→D}. Bao đóng C+ là:)</p>

### Đáp án
- A 

<p>{C}</p>

- B (Đúng ✓)

<p>{A, C}</p>

- C 

<p>{A, B, C}</p>

- D 

<p>{A, C, D, E}</p>

---

## Câu 25: INT1313_DB_000006

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Let R(A,B,C,D,E), F = {AB→CD, C→E, E→B}. What is (AB)+? (Cho R(A,B,C,D,E), F = {AB→CD, C→E, E→B}. Bao đóng (AB)+ là:)</p>

### Đáp án
- A 

<p>{A, B, C, D}</p>

- B 

<p>{A, B, C}</p>

- C (Đúng ✓)

<p>{A, B, C, D, E}</p>

- D 

<p>{A, B, D, E}</p>

---

## Câu 26: INT1313_DB_000005

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Room (RoomNumber, Building) is a weak entity dependent on Hotel (HotelID). Which ER diagram below is most suitable? </p><p>(Room (RoomNumber, Building) là thực thể yếu (weak entity) phụ thuộc Hotel (HotelID). Lược đồ ER nào sau đây phù hợp nhất?)</p>

### Đáp án
- A 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/34898d64-5fd9-4f5f-b7b3-05e4231a9e79/1765632448793_De_B.5.a.png"></p>

- B (Đúng ✓)

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/34898d64-5fd9-4f5f-b7b3-05e4231a9e79/1765632456709_De_B.5.b.png"></p>

- C 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/34898d64-5fd9-4f5f-b7b3-05e4231a9e79/1765632462618_De_B.5.c.png"></p>

- D 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/34898d64-5fd9-4f5f-b7b3-05e4231a9e79/1765632468210_De_B.5.d.png"></p>

---

## Câu 27: INT1313_DB_000004

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>For relationship CUSTOMER places ORDER: each ORDER must be placed by exactly one CUSTOMER, and a CUSTOMER may place zero or many ORDERs. Which statement is correct? (Quan hệ CUSTOMER–ORDER: mỗi ORDER bắt buộc thuộc đúng 1 CUSTOMER; CUSTOMER có thể có 0..N ORDER. Phát biểu nào đúng?)</p>

### Đáp án
- A 

<p>This is an N–N relationship because both sides are “many”.</p>

- B 

<p>ORDER must be a weak entity of CUSTOMER.</p>

- C (Đúng ✓)

<p>This is a 1–N relationship from CUSTOMER → ORDER, and ORDER has total participation in 'places'.</p>

- D 

<p>This is a 1–1 relationship because each ORDER has one CUSTOMER.</p>

---

## Câu 28: INT1313_DB_000003

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Customer has a multivalued composite attribute Phone = {(CountryCode, PhoneNo)}. Which mapping is correct? (Customer có thuộc tính đa trị dạng phức Phone = {(CountryCode, PhoneNo)}. Ánh xạ đúng là?)</p>

### Đáp án
- A (Đúng ✓)

<p>CUSTOMER(CID PK, Name); CUSTOMER_PHONE(CID FK, CountryCode, PhoneNo, PK(CID,CountryCode,PhoneNo))</p>

- B 

<p>CUSTOMER(CID PK, Name, CountryCode, PhoneNo)</p>

- C 

<p>CUSTOMER(CID PK, Name); PHONE(CountryCode, PhoneNo, CID FK, PK(CountryCode,PhoneNo))</p>

- D 

<p>CUSTOMER(CID PK, Name, Phones TEXT)</p>

---

## Câu 29: INT1313_DB_000002

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Project management: each Employee can work on many Projects, each Project can have many Employees. The relationship stores Role and Hours. Which design is most suitable? (</p><p>Quản lý dự án: Mỗi Employee có thể làm việc cho nhiều Project, và một project có thể có nhiều Employee, quan hệ có thuộc tính Role, Hours. Lược đồ nào phù hợp nhất?)</p>

### Đáp án
- A 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/7317f9b6-2e28-4fdb-9bd0-809578611be9/1765632715067_De_B.2.a.png"></p>

- B 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/7317f9b6-2e28-4fdb-9bd0-809578611be9/1765632705674_De_B.2.c.png"></p>

- C (Đúng ✓)

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/7317f9b6-2e28-4fdb-9bd0-809578611be9/1765632702004_De_B.2.d.png"></p>

- D 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/7317f9b6-2e28-4fdb-9bd0-809578611be9/1765632710113_De_B.2.b.png"></p>

---

## Câu 30: INT1313_DB_000001

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Hospital system: each Patient belongs to exactly one Ward, and each Ward can manage many Patients. Which ER mapping best matches this description? </p><p>(Hệ thống bệnh viện: mỗi Patient thuộc đúng 1 Ward; một Ward có thể quản lý nhiều Patient. Lược đồ nào phù hợp nhất?)</p>

### Đáp án
- A 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/04158127-5367-4571-8940-e276a6bc35c4/1765632627513_De_B.1.a.png"></p>

- B (Đúng ✓)

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/04158127-5367-4571-8940-e276a6bc35c4/1765632641447_De_B.1.b.png"></p>

- C 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/04158127-5367-4571-8940-e276a6bc35c4/1765632651115_De_B.1.d.png"></p>

- D 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/04158127-5367-4571-8940-e276a6bc35c4/1765632646765_De_B.1.c.png"></p>

---

## Câu 31: INT1313_DA_000030

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Author has a multivalued attribute Education (composite: Degree, University, Year). Author writes Book (N-N relationship), the relationship has a multivalued attribute Contribution (Role, Percentage). The correct mapping to the relational model is: ( Author có thuộc tính đa trị Education (composite: Degree, University, Year). Author viết Book (N-N), quan hệ có thuộc tính đa trị Contribution (Role, Percentage). Ánh xạ đúng sang mô hình quan hệ là: )</p>

### Đáp án
- A 

<p>AUTHOR(AuthorID PK, Name)</p><p>AUTHOR_EDUCATION(AuthorID FK, Degree, University, Year, PK(AuthorID, Degree, University))</p><p>BOOK(BookID PK, Title)</p><p>WRITES(AuthorID FK, BookID FK, PK(AuthorID, BookID))</p><p>CONTRIBUTION(AuthorID FK, BookID FK, Role, Percentage, PK(AuthorID, BookID, Role))</p>

- B 

<p>AUTHOR(AuthorID PK, Name, Education TEXT)</p><p>BOOK(BookID PK, Title)</p><p>WRITES(AuthorID FK, BookID FK, Contributions TEXT, PK(AuthorID, BookID))</p>

- C (Đúng ✓)

<p>AUTHOR(AuthorID PK, Name)</p><p>AUTHOR_EDUCATION(AuthorID FK, Degree, University, Year, PK(AuthorID, Degree, University))</p><p>BOOK(BookID PK, Title)</p><p>WRITES(AuthorID FK, BookID FK, Role, Percentage, PK(AuthorID, BookID, Role), FK(AuthorID,BookID) forms composite)</p>

- D 

<p>AUTHOR(AuthorID PK, Name)</p><p>EDUCATION(Degree, University, Year, AuthorID FK, PK(Degree, University, Year))</p><p>BOOK(BookID PK, Title)</p><p>WRITES(AuthorID FK, BookID FK, PK(AuthorID, BookID))</p><p>CONTRIBUTION(Role, Percentage, AuthorID FK, BookID FK, PK(Role))</p>

---

## Câu 32: INT1313_DA_000029

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given the following ERD, the correct mapping is: ( Cho lược đồ ERD, ánh xạ đúng là: )</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/40e7829b-5b9d-409f-80fd-0c8fcf8c9efd/1765551552189_De_A.29.png"></p>

### Đáp án
- A 

<p>PERSON(PID PK, Name, DOB)</p><p>STUDENT(PID PK/FK→PERSON, Major, GPA)</p><p>EMPLOYEE(PID PK/FK→PERSON, Salary, HireDate)</p><p>STUDENT_EMPLOYEE(PID PK/FK→PERSON, Major, GPA, Salary, HireDate, WorkHours)</p>

- B (Đúng ✓)

<p>PERSON(PID PK, Name, DOB)</p><p>STUDENT(PID PK/FK→PERSON, Major, GPA)</p><p>EMPLOYEE(PID PK/FK→PERSON, Salary, HireDate)</p><p>STUDENT_EMPLOYEE(PID PK, FK(PID)→STUDENT, FK(PID)→EMPLOYEE, WorkHours)</p>

- C 

<p>PERSON(PID PK, Name, DOB, Major, GPA, Salary, HireDate, WorkHours)</p>

- D 

<p>PERSON(PID PK, Name, DOB)</p><p>STUDENT(SID PK, PID FK, Major, GPA)</p><p>EMPLOYEE(EID PK, PID FK, Salary, HireDate)</p><p>STUDENT_EMPLOYEE(SEID PK, SID FK, EID FK, WorkHours)</p>

---

## Câu 33: INT1313_DA_000028

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given the following ERD, the correct mapping is: ( Cho lược đồ ERD. Ánh xạ đúng là: )</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/ce40156d-ec51-41fb-af1b-ba1cb6464deb/1765551612031_De_A.28.png"></p>

### Đáp án
- A 

<p>COMPANY(CompID PK)</p><p>EMPLOYEE(CompID FK, EmpID, PK(CompID, EmpID))</p><p>DEPENDENT(CompID FK, EmpID FK, DepName, PK(CompID, EmpID, DepName))</p><p>INSURANCE(CompID FK, EmpID FK, DepName FK, InsuranceType, PK(CompID, EmpID, DepName, InsuranceType))</p>

- B 

<p>COMPANY(CompID PK)</p><p>EMPLOYEE(CompID, EmpID, PK(CompID, EmpID))</p><p>DEPENDENT(CompID, EmpID, DepName, PK(CompID, EmpID, DepName))</p><p>INSURANCE(CompID , EmpID, DepName, InsuranceType, PK(CompID, EmpID, DepName, InsuranceType))</p>

- C (Đúng ✓)

<p>COMPANY(CompID PK)</p><p>EMPLOYEE(CompID FK→COMPANY, EmpID, PK(CompID, EmpID))</p><p>DEPENDENT(CompID, EmpID, DepName, FK(CompID,EmpID)→EMPLOYEE, PK(CompID, EmpID, DepName))</p><p>INSURANCE(CompID, EmpID, DepName, InsuranceType, FK(CompID,EmpID,DepName)→DEPENDENT, PK(CompID, EmpID, DepName, InsuranceType))</p>

- D 

<p>COMPANY(CompID PK)</p><p>EMPLOYEE(CompID FK→COMPANY, EmpID, PK(CompID, EmpID))</p><p>DEPENDENT(CompID, EmpID, DepName, FK(CompID,EmpID)→EMPLOYEE, PK(EmpID, DepName))</p><p>INSURANCE(CompID, EmpID, DepName, InsuranceType, FK(CompID,EmpID,DepName)→DEPENDENT, PK(DepName, InsuranceType))</p>

---

## Câu 34: INT1313_DA_000027

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given the following ERD, which mapping is correct? ( Cho lược đồ ERD. Ánh xạ đúng là: )</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/f8c715ed-8724-4cbd-bbc9-9e9792c75582/1765635274380_De_A.27.png"></p>

### Đáp án
- A 

<p>DRIVER(DriverID PK, Name); </p><p>SHIPMENT(ShipmentID PK, Code); </p><p>WAREHOUSE(WarehouseID PK, Location, ShipmentID FK→SHIPMENT NOT NULL); </p><p>DELIVERS(DriverID FK, ShipmentID FK, DeliveryInfo TEXT, PK(DriverID, ShipmentID))</p>

- B 

<p>DRIVER(DriverID PK, Name); </p><p>SHIPMENT(ShipmentID PK, Code, WarehouseID FK→WAREHOUSE); </p><p>WAREHOUSE(WarehouseID PK, Location); </p><p>DELIVERS(DriverID FK, ShipmentID FK, WarehouseID FK, StartDate, EndDate, VehicleType, PK(DriverID, ShipmentID, WarehouseID))</p>

- C (Đúng ✓)

<p>DRIVER(DriverID PK, Name); </p><p>SHIPMENT(ShipmentID PK, Code, WarehouseID FK→WAREHOUSE NOT NULL); </p><p>WAREHOUSE(WarehouseID PK, Location); </p><p>DELIVERS(DriverID FK→DRIVER, ShipmentID FK→SHIPMENT, StartDate, EndDate, VehicleType, PK(DriverID, ShipmentID))</p>

- D 

<p>DRIVER(DriverID PK, Name); </p><p>SHIPMENT(ShipmentID PK, Code, WarehouseID FK→WAREHOUSE NOT NULL); </p><p>WAREHOUSE(WarehouseID PK, Location); DELIVERS(DriverID FK, ShipmentID FK, PK(DriverID, ShipmentID)); </p><p>DELIVERY_INFO(DriverID FK, ShipmentID FK, StartDate, EndDate, VehicleType, PK(DriverID, ShipmentID, StartDate))</p>

---

## Câu 35: INT1313_DA_000026

- Danh mục: Nhom5
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Given the following ERD, which relational mapping is correct? ( Cho lược đồ ERD, ánh xạ đúng sang mô hình quan hệ là: )</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/37408cbd-e1d5-49d8-9c82-b380328e7dc6/1765635169997_De_A.26.png"></p>

### Đáp án
- A 

<p>LIBRARY(LibraryID PK, Name);</p><p>MEMBER(MemberID PK, Name, LibraryID FK→LIBRARY);</p><p>BOOK(BookID PK, Title);</p><p>BORROWS(MemberID FK→MEMBER, BookID FK→BOOK, LibraryID FK→LIBRARY, PK(MemberID, BookID))</p>

- B (Đúng ✓)

<p>LIBRARY(LibraryID PK, Name);</p><p>MEMBER(MemberID PK, Name, LibraryID FK→LIBRARY NOT NULL);</p><p>BOOK(BookID PK, Title); </p><p>BORROWS(MemberID FK→MEMBER, BookID FK→BOOK, PK(MemberID, BookID))</p>

- C 

<p>LIBRARY(LibraryID PK, Name);</p><p>MEMBER(MemberID PK, Name, LibraryID FK→LIBRARY NOT NULL, BookID FK→BOOK NOT NULL);</p><p>BOOK(BookID PK, Title)</p>

- D 

<p>LIBRARY(LibraryID PK, Name, MemberID FK);</p><p>MEMBER(MemberID PK, Name, BookID FK); BOOK(BookID PK, Title);</p><p>BORROWS(MemberID FK, BookID FK, PK(MemberID, BookID))</p>

---

## Câu 36: INT1313_DA_000025

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given R(StudentID, CourseID, Grade, StudentName) with FDs: (StudentID, CourseID)→Grade and StudentID→StudentName. Assume R is in 1NF. What is the highest normal form of R? ( Cho quan hệ R(StudentID, CourseID, Grade, StudentName) với các phụ thuộc hàm: (StudentID, CourseID)→Grade và StudentID→StudentName. Giả sử R ở 1NF. Dạng chuẩn cao nhất của R là: )</p>

### Đáp án
- A 

<p>2NF</p>

- B 

<p>3NF</p>

- C 

<p>BCNF</p>

- D (Đúng ✓)

<p>Chỉ 1NF</p>

---

## Câu 37: INT1313_DA_000024

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Which statement correctly describes the condition for BCNF? ( Phát biểu nào sau đây mô tả đúng điều kiện của chuẩn BCNF? )</p>

### Đáp án
- A 

<p>Với mọi FD X→Y, X phải là khóa chính.</p>

- B (Đúng ✓)

<p>Với mọi FD không tầm thường X→Y, X phải là siêu khóa.</p>

- C 

<p>Không tồn tại bất kỳ phụ thuộc hàm nào trong quan hệ.</p>

- D 

<p>Mọi thuộc tính không khóa đều phụ thuộc bắc cầu vào khóa chính.</p>

---

## Câu 38: INT1313_DA_000023

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Let R(A,B,C), F = {A→B, B→C} and assume R is in 1NF. What is the highest normal form of R? ( Cho R(A,B,C), F = {A→B, B→C} và giả sử R ở 1NF. Dạng chuẩn cao nhất của R là: )</p>

### Đáp án
- A (Đúng ✓)

<p>2NF (không đạt 3NF)</p>

- B 

<p>3NF (không BCNF)</p>

- C 

<p>BCNF</p>

- D 

<p>Chỉ 1NF</p>

---

## Câu 39: INT1313_DA_000022

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Let R(A,B,C), F = {A→B}. The candidate key of R is: ( Cho R(A,B,C), F = {A→B}. Khóa ứng viên của R là: )</p>

### Đáp án
- A 

<p>A</p>

- B 

<p>AB</p>

- C (Đúng ✓)

<p>AC</p>

- D 

<p>BC</p>

---

## Câu 40: INT1313_DA_000021

- Danh mục: Nhom4
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Let R(A,B,C), F = {A→B, B→C}. The candidate key of R is: ( Cho R(A,B,C), F = {A→B, B→C}. Khóa ứng viên của R là: )</p>

### Đáp án
- A (Đúng ✓)

<p>A</p>

- B 

<p>B</p>

- C 

<p>AB</p>

- D 

<p>AC</p>

---

## Câu 41: INT1313_DA_000020

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given STUDENT(SID, Name, Major, GPA), COURSE(CID, Title, Dept, Credits), ENROLL(SID, CID, Semester, Grade). Retrieve the SID of students with major being 'CS' who have NOT enrolled in ANY course with credits greater than or equal to 4. The correct expression is:</p><p> (Cho STUDENT(SID, Name, Major, GPA), COURSE(CID, Title, Dept, Credits), ENROLL(SID, CID, Semester, Grade). Lấy SID của sinh viên có Major là 'CS' nhưng chưa đăng ký bất kỳ môn nào có Credits lớn hơn hoặc bằng 4. Biểu thức đúng là:)</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{SID}(σ_{Major='CS'}(STUDENT)) − π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ σ_{Credits≥4}(ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mi>s</mi><mo>≥</mo><mn>4</mn></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(σ_{Major='CS'}(STUDENT)) − π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ σ_{Credits≥4}(ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight">re</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">s</span><span class="mrel mtight">≥</span><span class="mord mtight">4</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2452em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ COURSE) − π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ σ_{Credits≥4}(COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mi>s</mi><mo>≥</mo><mn>4</mn></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ COURSE) − π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ σ_{Credits≥4}(COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight">re</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">s</span><span class="mrel mtight">≥</span><span class="mord mtight">4</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2452em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL) − π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ σ_{Credits≥4}(COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>σ</mi><mrow><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mi>s</mi><mo>≥</mo><mn>4</mn></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL) − π_{SID}(σ_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ σ_{Credits≥4}(COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight">re</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">s</span><span class="mrel mtight">≥</span><span class="mord mtight">4</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2452em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D (Đúng ✓)

<p><span class="ql-formula" data-value="π_{SID}(σ_{Major='CS'}(STUDENT)) − π_{SID}(π_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ π_{Credits≥4}(COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><msub><mi>π</mi><mrow><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mi>s</mi><mo>≥</mo><mn>4</mn></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(σ_{Major='CS'}(STUDENT)) − π_{SID}(π_{Major='CS'}(STUDENT) ⋈ ENROLL ⋈ π_{Credits≥4}(COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight">re</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">s</span><span class="mrel mtight">≥</span><span class="mord mtight">4</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2452em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 42: INT1313_DA_000019

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given STUDENT(SID, Name, Major, GPA), COURSE(CID, Title, Dept, Credits), ENROLL(SID, CID, Semester, Grade). Retrieve the Title of courses in Dept being 'CS' that have not been enrolled by any student with GPA greater than 3.5. The correct expression is:</p><p>( Cho STUDENT(SID, Name, Major, GPA), COURSE(CID, Title, Dept, Credits), ENROLL(SID, CID, Semester, Grade). Lấy Title của các môn thuộc Dept có giá trị là 'CS' mà chưa có sinh viên nào có GPA lớn hơn 3.5 đăng ký. Biểu thức đúng là: )</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{Title}(σ_{Dept='CS'}(COURSE)) − π_{Title}(σ_{GPA&gt;3.5}(STUDENT) ⋈ ENROLL ⋈ COURSE)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.5</mn></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(σ_{Dept='CS'}(COURSE)) − π_{Title}(σ_{GPA&gt;3.5}(STUDENT) ⋈ ENROLL ⋈ COURSE)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.5</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- B (Đúng ✓)

<p><span class="ql-formula" data-value="π_{Title}(σ_{Dept='CS'}(COURSE)) − π_{Title}(σ_{Dept='CS'}(σ_{GPA&gt;3.5}(STUDENT) ⋈ ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.5</mn></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(σ_{Dept='CS'}(COURSE)) − π_{Title}(σ_{Dept='CS'}(σ_{GPA&gt;3.5}(STUDENT) ⋈ ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.5</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="σ_{Dept='CS'}(π_{Title}(COURSE)) − π_{Title}(σ_{GPA&gt;3.5}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.5</mn></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{Dept='CS'}(π_{Title}(COURSE)) − π_{Title}(σ_{GPA&gt;3.5}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.5</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="σ_{Title}(π_{Dept='CS'}(COURSE)) − σ_{Title}(π_{Dept='CS'}(π_{GPA&gt;3.5}(STUDENT) ⋈ ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>−</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.5</mn></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{Title}(π_{Dept='CS'}(COURSE)) − σ_{Title}(π_{Dept='CS'}(π_{GPA&gt;3.5}(STUDENT) ⋈ ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.5</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 43: INT1313_DA_000018

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given STUDENT(SID, Name, GPA), ENROLL(SID, CID, Semester, Grade). Get (SID, CID) pairs of students whose GPA greater than 3.0. Which expression is correct?</p><p>(Cho STUDENT(SID, Name, GPA), ENROLL(SID, CID, Semester, Grade). Lấy các cặp (SID, CID) của sinh viên có GPA lớn hơn 3.0. Biểu thức đúng là:)</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="σ_{GPA&gt;3.0}(π_{SID,CID}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.0</mn></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{GPA&gt;3.0}(π_{SID,CID}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- B (Đúng ✓)

<p><span class="ql-formula" data-value="π_{SID,CID}(σ_{GPA&gt;3.0}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.0</mn></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,CID}(σ_{GPA&gt;3.0}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="σ_{GPA&gt;3.0}(π_{SID}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.0</mn></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{GPA&gt;3.0}(π_{SID}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="σ_{SID,CID}(π_{GPA&gt;3.0}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.0</mn></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{SID,CID}(π_{GPA&gt;3.0}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 44: INT1313_DA_000017

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given STUDENT, COURSE(CID, Title, Dept), ENROLL(SID, CID, Semester, Grade). Get Names of students enrolled in course with title being 'Database'. Which expression is correct? </p><p>( Cho STUDENT, COURSE(CID, Title, Dept), ENROLL(SID, CID, Semester, Grade). Lấy Name của sinh viên đăng ký học môn có title là 'Database'. Biểu thức đúng là: )</p>

### Đáp án
- A (Đúng ✓)

<p><span class="ql-formula" data-value="π_{Name}(σ_{Title='Database'}(STUDENT ⋈ ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{Title='Database'}(STUDENT ⋈ ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="σ_{Name}(π_{Title='Database'}(STUDENT ⋈ ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{Name}(π_{Title='Database'}(STUDENT ⋈ ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="π_{Name}(σ_{CID∈π_{CID}(σ_{Title='Database'}(COURSE))}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi><mo>∈</mo><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{CID∈π_{CID}(σ_{Title='Database'}(COURSE))}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.1136em; vertical-align: -0.3636em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.5198em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mrel mtight">∈</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: -0.0359em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mopen mtight">(</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3448em; margin-left: -0.0359em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.6068em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8496em;"><span class="" style="top: -2.8496em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.5556em;"></span><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8496em;"><span class="" style="top: -2.8496em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.5556em;"></span><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.262em;"><span class=""></span></span></span></span></span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">U</span><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">RSE</span><span class="mclose mtight">))</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.3636em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="σ_{Name}(π_{CID∈π_{CID}(σ_{Title='Database'}(COURSE))}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi><mo>∈</mo><msub><mi>π</mi><mrow><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{Name}(π_{CID∈π_{CID}(σ_{Title='Database'}(COURSE))}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.1136em; vertical-align: -0.3636em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.5198em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mrel mtight">∈</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3567em; margin-left: -0.0359em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1433em;"><span class=""></span></span></span></span></span></span><span class="mopen mtight">(</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3448em;"><span class="" style="top: -2.3448em; margin-left: -0.0359em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.6068em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8496em;"><span class="" style="top: -2.8496em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.5556em;"></span><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8496em;"><span class="" style="top: -2.8496em; margin-right: 0.1em;"><span class="pstrut" style="height: 2.5556em;"></span><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.262em;"><span class=""></span></span></span></span></span></span><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">U</span><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">RSE</span><span class="mclose mtight">))</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.3636em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 45: INT1313_DA_000016

- Danh mục: Nhom3
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Given STUDENT(SID, Name, Major, GPA). Get (SID, Name) of students whose Major being 'CS'. Which relational algebra expression is correct?</p><p> ( Cho STUDENT(SID, Name, Major, GPA). Lấy (SID, Name) của sinh viên có Major là 'CS'. Biểu thức đại số quan hệ nào đúng? )</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="σ_{Major='CS'}(STUDENT)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{Major='CS'}(STUDENT)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="π_{SID,Name}(STUDENT)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,Name}(STUDENT)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- C (Đúng ✓)

<p><span class="ql-formula" data-value="π_{SID,Name}(σ_{Major='CS'}(STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,Name}(σ_{Major='CS'}(STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="σ_{Major='CS'}(π_{SID,Name}(STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{Major='CS'}(π_{SID,Name}(STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 46: INT1313_DA_000015

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given R(A,B,C,D) and two sets of functional dependencies: F1 = { A→B, B→C, C→D } and F2 = { A→B, A→C, A→D }. Which of the following statements is correct? ( Cho R(A,B,C,D), và hai tập phụ thuộc hàm: F₁ = { A→B, B→C, C→D } và F₂ = { A→B, A→C, A→D }. Khẳng định nào sau đây là đúng? )</p>

### Đáp án
- A 

<p>F₁ và F₂ tương đương (F₁ ≡ F₂)</p>

- B (Đúng ✓)

<p>F₁ suy ra F₂ nhưng F₂ không suy ra F₁</p>

- C 

<p>F₂ suy ra F₁ nhưng F₁ không suy ra F₂</p>

- D 

<p>F₁ và F₂ không cái nào suy ra cái nào</p>

---

## Câu 47: INT1313_DA_000014

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given R(A,B,C,D) with F = { AB→C, B→C, C→D }. Considering the functional dependencies in F, which of the following attributes is extraneous on the left-hand side of a functional dependency ? ( Cho R(A,B,C,D) với F = { AB→C, B→C, C→D }. Xét các phụ thuộc hàm trong F, thuộc tính nào sau đây là thừa ở vế trái của một phụ thuộc hàm ? )</p>

### Đáp án
- A 

<p>Không có thuộc tính nào thừa ở vế trái</p>

- B (Đúng ✓)

<p>A trong AB→C</p>

- C 

<p>B trong AB→C</p>

- D 

<p>C trong C→D</p>

---

## Câu 48: INT1313_DA_000013

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Given R(A,B,C,D,E) and F = { A→BC, B→C, CD→E, E→A }. Which of the following is a canonical cover that is equivalent to F? ( Cho R(A,B,C,D,E), F = { A→BC, B→C, CD→E, E→A }. Phủ tối thiểu (canonical cover) tương đương với F là tập nào sau đây? )</p>

### Đáp án
- A (Đúng ✓)

<p>{ A→B, B→C, CD→E, E→A }</p>

- B 

<p>{ A→BC, B→C, CD→E, E→A }</p>

- C 

<p>{ A→C, B→C, CD→E, E→A }</p>

- D 

<p>{ A→B, A→C, CD→E, E→A }</p>

---

## Câu 49: INT1313_DA_000012

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given R(A,B,C,D,E) with F = { AB→C, C→D, DE→A, B→E }. What is the closure of the attribute set {A,B}, i.e., (AB)+? ( Cho R(A,B,C,D,E) với F = { AB→C, C→D, DE→A, B→E }. Bao đóng của tập {A,B}, tức (AB)+, là: )</p>

### Đáp án
- A 

<p>{A, B, C}</p>

- B 

<p>{A, B, C, E}</p>

- C 

<p>{A, B, C, D}</p>

- D (Đúng ✓)

<p>{A, B, C, D, E}</p>

---

## Câu 50: INT1313_DA_000011

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Given relation R(A,B,C,D,E) with functional dependency set F = { A→BC, B→C, CD→E, E→A }. Which of the following non-trivial functional dependencies can be inferred from F? ( Cho quan hệ R(A,B,C,D,E) với tập phụ thuộc hàm F = { A→BC, B→C, CD→E, E→A }. Phụ thuộc hàm không tầm thường nào sau đây được suy ra từ F? )</p>

### Đáp án
- A (Đúng ✓)

<p>BD→C</p>

- B 

<p>A→E</p>

- C 

<p>D→E</p>

- D 

<p>B→A</p>

---

## Câu 51: INT1313_DA_000010

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Let R(A,B,C,D), F = {A→B, B→C, CD→A}. What is (CD)+? ( Cho R(A,B,C,D), F = {A→B, B→C, CD→A}. Bao đóng (CD)+ là: )</p>

### Đáp án
- A 

<p>{C, D}</p>

- B 

<p>{A, C, D}</p>

- C (Đúng ✓)

<p>{A, B, C, D}</p>

- D 

<p>{B, C, D}</p>

---

## Câu 52: INT1313_DA_000009

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Let R(A,B,C), F = {A→B, B→C}. What is B+? ( Cho R(A,B,C), F = {A→B, B→C}. Bao đóng B+ là: )</p>

### Đáp án
- A 

<p>{B}</p>

- B (Đúng ✓)

<p>{B, C}</p>

- C 

<p>{A, B}</p>

- D 

<p>{A, B, C}</p>

---

## Câu 53: INT1313_DA_000008

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Let R(A,B,C,D), F = {A→B, B→C, AC→D}. What is A+? ( Cho R(A,B,C,D), F = {A→B, B→C, AC→D}. Bao đóng A+ là: )</p>

### Đáp án
- A 

<p>{A, B}</p>

- B 

<p>{A, B, C}</p>

- C (Đúng ✓)

<p>{A, B, C, D}</p>

- D 

<p>{A, D}</p>

---

## Câu 54: INT1313_DA_000007

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Let R(A,B,C), F = {AB→C, C→A}. What is C+? ( Cho R(A,B,C), F = {AB→C, C→A}. Bao đóng C+ là: )</p>

### Đáp án
- A 

<p>{C}</p>

- B (Đúng ✓)

<p>{A, C}</p>

- C 

<p>{B, C}</p>

- D 

<p>{A, B, C}</p>

---

## Câu 55: INT1313_DA_000006

- Danh mục: Nhom2
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Let R(A,B,C,D), F = {AB→C, C→D}. What is (AB)+? ( Cho R(A,B,C,D), F = {AB→C, C→D}. Bao đóng (AB)+ là: )</p>

### Đáp án
- A 

<p>{A, B}</p>

- B 

<p>{A, B, C}</p>

- C (Đúng ✓)

<p>{A, B, C, D}</p>

- D 

<p>{A, C, D}</p>

---

## Câu 56: INT1313_DA_000005

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Employee management system: each Employee can have many Skills, and each Skill can belong to many Employees. Which design is the most normalized? ( Hệ thống quản lý nhân viên: mỗi Employee có thể có nhiều kỹ năng (Skill), một Skill có thể thuộc về nhiều Employee. Cách thiết kế nào sau đây là hợp lý nhất, tránh dư thừa dữ liệu? )</p>

### Đáp án
- A 

<p>EMP(EID PK, Name, Skill1, Skill2, Skill3)</p>

- B 

<p>EMP(EID PK, Name, Skills TEXT)</p>

- C (Đúng ✓)

<p>EMP(EID PK, Name); EMP_SKILL(EID FK, Skill, PK(EID,Skill))</p>

- D 

<p>SKILL(Skill PK); EMP(EID PK, Name, Skill FK→SKILL)</p>

---

## Câu 57: INT1313_DA_000004

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Which statement about weak entities in ER diagrams is incorrect? </p><p>(Phát biểu nào sau đây không đúng về thực thể yếu (weak entity) trong ERD?)</p><p><br></p>

### Đáp án
- A 

<p>Weak entity phụ thuộc vào thực thể chủ (owner entity) để xác định duy nhất các instance của nó trong hệ thống.</p>

- B (Đúng ✓)

<p>Weak entity có khóa chính riêng biệt hoàn toàn độc lập, không cần kết hợp với khóa của thực thể chủ nào.</p>

- C 

<p>Weak entity sử dụng khóa bộ phận (partial key) kết hợp với khóa ngoại từ thực thể chủ để tạo khóa chính.</p>

- D 

<p>Weak entity luôn có quan hệ identifying relationship với thực thể chủ, thường được biểu diễn bằng đường kép trong ERD.</p>

---

## Câu 58: INT1313_DA_000003

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Dependent (BirthDate, DepName) is a weak entity dependent on Employee (EmpID). Which ER diagram below is most suitable? ( Dependent (BirthDate,DepName) là thực thể yếu (weak entity) phụ thuộc Employee(EmpID). Lược đồ ER nào sau đây phù hợp nhất? )</p>

### Đáp án
- A 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/ff364a05-a6b0-412d-bcf8-d66c95b93908/1765551441802_De_A.3.a.png"></p>

- B 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/ff364a05-a6b0-412d-bcf8-d66c95b93908/1765551455506_De_A.3.b.png"></p>

- C (Đúng ✓)

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/ff364a05-a6b0-412d-bcf8-d66c95b93908/1765551464009_De_A.3.c.png"></p>

- D 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/ff364a05-a6b0-412d-bcf8-d66c95b93908/1765551472251_De_A.3.d.png"></p>

---

## Câu 59: INT1313_DA_000002

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Each student can register for many courses, each course has many students. At the end of the course, the student's grade will be stored according to the registration information. Which ER diagram below is most suitable? ( Mỗi sinh viên có thể đăng ký nhiều học phần, mỗi học phần có nhiều sinh viên. Kết thúc khóa học điểm của SV sẽ được lưu theo thông tin đăng ký. Lược đồ ER nào sau đây phù hợp nhất? )</p>

### Đáp án
- A 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/38c05398-d626-4189-a566-c9ebece73636/1765551274067_De_A.2.b.png"></p>

- B 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/38c05398-d626-4189-a566-c9ebece73636/1765551386413_De_A.2.d.png"></p>

- C 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/38c05398-d626-4189-a566-c9ebece73636/1765551287206_De_A.2.c..png"></p>

- D (Đúng ✓)

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/38c05398-d626-4189-a566-c9ebece73636/1765551395968_De_A.2.a.png"></p>

---

## Câu 60: INT1313_DA_000001

- Danh mục: Nhom1
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Student management system: each Student belongs to exactly one Department, and each Department can manage many Students. Which ER a best matches this description?</p><p>( Hệ thống quản lý sinh viên: mỗi Student thuộc đúng một Department; một Department có thể quản lý nhiều Student. Lược đồ ER nào sau đây phù hợp nhất? )</p>

### Đáp án
- A (Đúng ✓)

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/d74a5a35-fe7f-41f0-9bfa-0f56224b903c/1765551161215_De_A.1.a.png"></p>

- B 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/d74a5a35-fe7f-41f0-9bfa-0f56224b903c/1765551183461_De_A.1.c.png"></p>

- C 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/d74a5a35-fe7f-41f0-9bfa-0f56224b903c/1765551172922_De_A.1.b.png"></p>

- D 

<p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/d74a5a35-fe7f-41f0-9bfa-0f56224b903c/1765551197805_De_A.1.d.png"></p>

---

## Câu 61: INT1313_ERD_RM_250286

- Danh mục: ERD_RM
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Product có thuộc tính đa trị Tag. Cách ánh xạ đúng là:</p>

### Đáp án
- A 

<p>PRODUCT(PID PK, Tag1, Tag2, Tag3)</p>

- B 

<p>PRODUCT(PID PK, Tags TEXT)</p>

- C (Đúng ✓)

<p>PRODUCT(PID PK,…); PRODUCT_TAG(PID FK, Tag, PK(PID,Tag))</p>

- D 

<p>PRODUCT(PID PK); TAG(Tag PK); không cần bảng trung gian</p>

---

## Câu 62: INT1313_ERD_RM_702661

- Danh mục: ERD_RM
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Person(PID, Name) là thực thể tổng quát, Student là thực thể con với thuộc tính Major. Lược đồ quan hệ nào sau đây là đúng?</p>

### Đáp án
- A 

<p>PERSON(PID PK, Name); STUDENT(SID PK, Name, Major)</p>

- B 

<p>PERSON(PID PK, Name, Major)</p>

- C (Đúng ✓)

<p>PERSON(PID PK, Name); STUDENT(PID PK/FK→PERSON, Major)</p>

- D 

<p>STUDENT(PID PK, Name, Major); không cần bảng PERSON</p>

---

## Câu 63: INT1313_ERD_RM_385558

- Danh mục: ERD_RM
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Dependent là thực thể yếu của Employee. Ánh xạ đúng là:</p>

### Đáp án
- A 

<p>DEP(EmpID, DepName PK), không FK</p>

- B 

<p>EMP(EmpID PK, DepName); DEP(DepName PK)</p>

- C (Đúng ✓)

<p>EMP(EmpID PK); DEP(EmpID FK, DepName, BirthDate, PK(EmpID,DepName))</p>

- D 

<p>EMP_DEP(EmpID, DepName PK)</p>

---

## Câu 64: INT1313_ERD_RM_127837

- Danh mục: ERD_RM
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Quan hệ N–N Enroll giữa Student và Course, có thuộc tính Grade. Ánh xạ đúng là:</p>

### Đáp án
- A 

<p>STUDENT(SID PK, CID FK, Grade); COURSE(CID PK)</p>

- B (Đúng ✓)

<p>STUDENT(SID PK); COURSE(CID PK); ENROLL(SID FK, CID FK, Grade, PK(SID,CID))</p>

- C 

<p>ENROLL(SID PK, CID PK, Grade), không FK</p>

- D 

<p>COURSE(CID PK, SID FK, Grade); STUDENT(SID PK)</p>

---

## Câu 65: INT1313_ERD_RM_189517

- Danh mục: ERD_RM
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Library(1) — has — Book(N). Ánh xạ đúng sang mô hình quan hệ là:</p>

### Đáp án
- A (Đúng ✓)

<p>LIB(LID PK); BOOK(BID PK, LID FK→LIB)</p>

- B 

<p>LIB(LID PK, BID FK); BOOK(BID PK)</p>

- C 

<p>LIB_BOOK(LID,BID, PK(LID,BID)); LIB(LID PK); BOOK(BID PK)</p>

- D 

<p>BOOK(BID PK); LIB(LID PK, BID)</p>

---

## Câu 66: INT1313_KEY_NORMALFORM_046083

- Danh mục: Key_NormalForm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C), F = {AB→C, C→A}. Một khóa ứng viên của R là:</p>

### Đáp án
- A (Đúng ✓)

<p>AB</p>

- B 

<p>AC</p>

- C 

<p>C</p>

- D 

<p>B</p>

---

## Câu 67: INT1313_KEY_NORMALFORM_873683

- Danh mục: Key_NormalForm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C), F = {A→B, B→C} và giả sử R ở 1NF. Dạng chuẩn cao nhất của R là:</p>

### Đáp án
- A (Đúng ✓)

<p>2NF (không đạt 3NF)</p>

- B 

<p>3NF (không BCNF)</p>

- C 

<p>BCNF</p>

- D 

<p>Chỉ 1NF</p>

---

## Câu 68: INT1313_KEY_NORMALFORM_852800

- Danh mục: Key_NormalForm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C,D), F = {AB→C, C→D}. Khóa ứng viên của R là:</p>

### Đáp án
- A 

<p>A</p>

- B (Đúng ✓)

<p>AB</p>

- C 

<p>ABC</p>

- D 

<p>CD</p>

---

## Câu 69: INT1313_KEY_NORMALFORM_541763

- Danh mục: Key_NormalForm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C), F = {A→B}. Khóa ứng viên của R là:</p>

### Đáp án
- A 

<p>A</p>

- B 

<p>AB</p>

- C (Đúng ✓)

<p>AC</p>

- D 

<p>BC</p>

---

## Câu 70: INT1313_KEY_NORMALFORM_539088

- Danh mục: Key_NormalForm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C), F = {A→B, B→C}. Khóa ứng viên của R là:</p>

### Đáp án
- A (Đúng ✓)

<p>A</p>

- B 

<p>B</p>

- C 

<p>AB</p>

- D 

<p>AC</p>

---

## Câu 71: INT1313_RELALG_195103

- Danh mục: RelAlg
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ STUDENT(SID, Name, Major, GPA) lưu trữ thông tin của sinh viên, COURSE(CID, Title, Dept) lưu trữ thông tin môn học, ENROLL(SID, CID, Semester, Grade) lưu trữ thông tin đăng ký học. Lấy danh sách Title các môn mà chưa có sinh viên nào đăng ký. Biểu thức đúng là:</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{Title}(COURSE) − π_{Title}(ENROLL)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(COURSE) − π_{Title}(ENROLL)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- B (Đúng ✓)

<p><span class="ql-formula" data-value="π_{Title}(COURSE) − π_{Title}(COURSE ⋈ ENROLL)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(COURSE) − π_{Title}(COURSE ⋈ ENROLL)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="π_{Title}(COURSE ⋈ ENROLL)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(COURSE ⋈ ENROLL)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{Title}(ENROLL) − π_{Title}(COURSE)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>π</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Title}(ENROLL) − π_{Title}(COURSE)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

---

## Câu 72: INT1313_RELALG_666876

- Danh mục: RelAlg
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ STUDENT(SID, Name, Major, GPA) lưu trữ thông tin của sinh viên, COURSE(CID, Title, Dept) lưu trữ thông tin môn học, ENROLL(SID, CID, Semester, Grade) lưu trữ thông tin đăng ký học. Lấy SID của các sinh viên đã đăng ký ít nhất một học phần thuộc khoa Dept = 'CS'. Biểu thức đại số quan hệ nào sau đây là đúng?</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{SID}​(ENROLL⋈COURSE)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mtext>​</mtext><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}​(ENROLL⋈COURSE)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord">​</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- B (Đúng ✓)

<p><span class="ql-formula" data-value="π_{SID}(σ_{Dept=′CS′}(ENROLL⋈COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><mo>=</mo><mtext>′</mtext><mi>C</mi><mi>S</mi><mtext>′</mtext></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}(σ_{Dept=′CS′}(ENROLL⋈COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight">=</span><span class="mord mtight">′</span><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">CS</span><span class="mord mtight">′</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="π_{SID}​(σ_{Dept='CS'}​(COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mtext>​</mtext><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mtext>​</mtext><mo stretchy="false">(</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}​(σ_{Dept='CS'}​(COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord">​</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mord">​</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{SID}​(σ_{Dept='CS'}​(STUDENT⋈ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi></mrow></msub><mtext>​</mtext><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>D</mi><mi>e</mi><mi>p</mi><mi>t</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mtext>​</mtext><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID}​(σ_{Dept='CS'}​(STUDENT⋈ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord">​</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">De</span><span class="mord mathnormal mtight">pt</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mord">​</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 73: INT1313_RELALG_560387

- Danh mục: RelAlg
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ STUDENT(SID, Name, Major, GPA) lưu trữ thông tin của sinh viên, COURSE(CID, Title, Dept) lưu trữ thông tin môn học, ENROLL(SID, CID, Semester, Grade) lưu trữ thông tin đăng ký học. Lấy cặp (SID, CID) của sinh viên có GPA &gt; 3.0. Biểu thức đúng là:</p>

### Đáp án
- A (Đúng ✓)

<p><span class="ql-formula" data-value="π_{SID,CID}(σ_{GPA&gt;3.0}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.0</mn></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,CID}(σ_{GPA&gt;3.0}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="σ_{GPA&gt;3.0}(π_{SID,CID}(STUDENT ⋈ ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.0</mn></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{GPA&gt;3.0}(π_{SID,CID}(STUDENT ⋈ ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C 

<p><span class="ql-formula" data-value="π_{SID,CID}(STUDENT)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,CID}(STUDENT)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{SID,CID}(σ_{GPA&gt;3.0}(ENROLL))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>C</mi><mi>I</mi><mi>D</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>G</mi><mi>P</mi><mi>A</mi><mo>&gt;</mo><mn>3.0</mn></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,CID}(σ_{GPA&gt;3.0}(ENROLL))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">GP</span><span class="mord mathnormal mtight">A</span><span class="mrel mtight">&gt;</span><span class="mord mtight">3.0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 74: INT1313_RELALG_282949

- Danh mục: RelAlg
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ STUDENT(SID, Name, Major, GPA) lưu trữ thông tin của sinh viên, COURSE(CID, Title, Dept) lưu trữ thông tin môn học, ENROLL(SID, CID, Semester, Grade) lưu trữ thông tin đăng ký học. Lấy tên sinh viên đăng ký học môn có Title là 'Database'. Biểu thức đúng là:</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{Name}(STUDENT ⋈ ENROLL)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(STUDENT ⋈ ENROLL)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="π_{Name}(σ_{Title='Database'}(STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{Title='Database'}(STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- C (Đúng ✓)

<p><span class="ql-formula" data-value="π_{Name}(σ_{Title='Database'}(STUDENT ⋈ ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo>⋈</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{Title='Database'}(STUDENT ⋈ ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6883em; vertical-align: -0.005em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="π_{Name}(σ_{Title='Database'}(ENROLL ⋈ COURSE))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>T</mi><mi>i</mi><mi>t</mi><mi>l</mi><mi>e</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>D</mi><mi>a</mi><mi>t</mi><mi>a</mi><mi>b</mi><mi>a</mi><mi>s</mi><msup><mi>e</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>E</mi><mi>N</mi><mi>R</mi><mi>O</mi><mi>L</mi><mi>L</mi><mo>⋈</mo><mi>C</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>S</mi><mi>E</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{Name}(σ_{Title='Database'}(ENROLL ⋈ COURSE))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3361em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.1389em;">T</span><span class="mord mathnormal mtight">i</span><span class="mord mathnormal mtight" style="margin-right: 0.0197em;">tl</span><span class="mord mathnormal mtight">e</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span><span class="mord mathnormal mtight">aba</span><span class="mord mathnormal mtight">s</span><span class="mord mtight"><span class="mord mathnormal mtight">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0278em;">ENRO</span><span class="mord mathnormal">LL</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">CO</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0576em;">RSE</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 75: INT1313_RELALG_317433

- Danh mục: RelAlg
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ STUDENT(SID, Name, Major, GPA) lưu trữ thông tin của sinh viên. Lấy (SID, Name) của sinh viên có Major = 'CS'. Biểu thức đúng là:</p>

### Đáp án
- A 

<p><span class="ql-formula" data-value="π_{SID,Name}(STUDENT)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,Name}(STUDENT)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- B 

<p><span class="ql-formula" data-value="σ_{Major='CS'}(STUDENT)">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{Major='CS'}(STUDENT)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">)</span></span></span></span></span>﻿</span></p>

- C (Đúng ✓)

<p><span class="ql-formula" data-value="π_{SID,Name}(σ_{Major='CS'}(STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">π_{SID,Name}(σ_{Major='CS'}(STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

- D 

<p><span class="ql-formula" data-value="σ_{Major='CS'}(π_{SID,Name}(STUDENT))">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>M</mi><mi>a</mi><mi>j</mi><mi>o</mi><mi>r</mi><msup><mo>=</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mi>C</mi><msup><mi>S</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></msub><mo stretchy="false">(</mo><msub><mi>π</mi><mrow><mi>S</mi><mi>I</mi><mi>D</mi><mo separator="true">,</mo><mi>N</mi><mi>a</mi><mi>m</mi><mi>e</mi></mrow></msub><mo stretchy="false">(</mo><mi>S</mi><mi>T</mi><mi>U</mi><mi>D</mi><mi>E</mi><mi>N</mi><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">σ_{Major='CS'}(π_{SID,Name}(STUDENT))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0361em; vertical-align: -0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.109em;">M</span><span class="mord mathnormal mtight" style="margin-right: 0.0572em;">aj</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">or</span><span class="mrel mtight"><span class="mrel mtight">=</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mord mathnormal mtight" style="margin-right: 0.0715em;">C</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6828em;"><span class="" style="top: -2.786em; margin-right: 0.0714em;"><span class="pstrut" style="height: 2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3283em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.0576em;">S</span><span class="mord mathnormal mtight" style="margin-right: 0.0785em;">I</span><span class="mord mathnormal mtight" style="margin-right: 0.0278em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight" style="margin-right: 0.109em;">N</span><span class="mord mathnormal mtight">am</span><span class="mord mathnormal mtight">e</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2861em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ST</span><span class="mord mathnormal" style="margin-right: 0.109em;">U</span><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="mord mathnormal" style="margin-right: 0.1389em;">ENT</span><span class="mclose">))</span></span></span></span></span>﻿</span></p>

---

## Câu 76: INT1313_FD_123402

- Danh mục: FD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C,D), F = {A→B, B→C}. Bao đóng của {A} là:</p>

### Đáp án
- A 

<p>{A}</p>

- B 

<p>{A, B}</p>

- C (Đúng ✓)

<p>{A, B, C}</p>

- D 

<p>{A, B, C, D}</p>

---

## Câu 77: INT1313_FD_538387

- Danh mục: FD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C,D), F = {AB→C, C→D}. Phụ thuộc hàm không tầm thường nào sau đây được suy ra từ F?</p>

### Đáp án
- A (Đúng ✓)

<p>AB→D</p>

- B 

<p>D→A</p>

- C 

<p>C→A</p>

- D 

<p>D→B</p>

---

## Câu 78: INT1313_FD_056650

- Danh mục: FD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C), F = {A→BC, B→C}. Phủ tối thiểu tương đương với F là:</p>

### Đáp án
- A 

<p>{A→BC}</p>

- B 

<p>{A→B, A→C}</p>

- C (Đúng ✓)

<p>{A→B, B→C}</p>

- D 

<p>{A→C, B→C}</p>

---

## Câu 79: INT1313_FD_173017

- Danh mục: FD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C,D), F = {A→B, C→D}. Bao đóng của tập thuộc tính {A,C} là:</p>

### Đáp án
- A 

<p>{A, C}</p>

- B (Đúng ✓)

<p>{A, B, C, D}</p>

- C 

<p>{A, B, C}</p>

- D 

<p>{A, C, D}</p>

---

## Câu 80: INT1313_FD_670630

- Danh mục: FD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B,C), F = {A→B, B→C}. Phụ thuộc hàm không tầm thường nào sau đây được suy ra từ F?</p>

### Đáp án
- A (Đúng ✓)

<p>A→C</p>

- B 

<p>C→A</p>

- C 

<p>B→A</p>

- D 

<p>C→B</p>

---

## Câu 81: INT1313_ERD_669504

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Ta có thực thể Order và Customer, mỗi đơn hàng thuộc về đúng 1 khách hàng, một khách hàng có nhiều đơn. Kiểu quan hệ và cách triển khai nào sau đây là đúng?</p>

### Đáp án
- A 

<p>Quan hệ 1–1; thêm khóa ngoại CustomerID vào Order và OrderID vào Customer</p>

- B (Đúng ✓)

<p>Quan hệ 1–N từ Customer sang Order; thêm CustomerID (FK) vào Order</p>

- C 

<p>Quan hệ N–N; tạo bảng trung gian CUSTOMER_ORDER(CustomerID, OrderID)</p>

- D 

<p>Quan hệ 1–N từ Order sang Customer; thêm OrderID (FK) vào Customer</p>

---

## Câu 82: INT1313_ERD_482180

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Trong ERD, ta có thực thể Person(PID, Name) và thực thể con Student(Major), với mối quan hệ Student ISA Person. Phát biểu nào sau đây là đúng về mối quan hệ  này?</p>

### Đáp án
- A 

<p>Student là kiểu tổng quát, Person là kiểu cụ thể hơn</p>

- B 

<p>Mọi Person đều là Student</p>

- C (Đúng ✓)

<p>Mọi Student đều là một Person</p>

- D 

<p>Person và Student là hai thực thể độc lập, không liên quan về mặt khóa và ý nghĩa</p>

---

## Câu 83: INT1313_ERD_794683

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Thực thể  Dependent có khóa là kết hợp của EmpID (khóa của Employee) và DepName . Phát biểu nào đúng về ERD?</p>

### Đáp án
- A 

<p>Employee là thực thể yếu  phải có mối quan hệ định danh với Dependentl.</p>

- B (Đúng ✓)

<p>Dependentl à thực thể yếu  phải có mối quan hệ định danh với Employee.</p>

- C 

<p>Dependent là thực thể mạnh  phải có mối quan hệ định danh với Employee.</p>

- D 

<p>Employee phụ thuộc vào Dependent để được định danh</p>

---

## Câu 84: INT1313_ERD_468274

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Trong ER, thuộc tính đa trị Phone của thực thể Employee nên được ánh xạ sang mô hình quan hệ như thế nào?</p>

### Đáp án
- A 

<p>Thêm các cột Phone1, Phone2, Phone3 vào bảng EMPLOYEE</p>

- B 

<p>Lưu tất cả số điện thoại trong một cột TEXT duy nhất PhoneList</p>

- C (Đúng ✓)

<p>Tạo bảng EMP_PHONE(EID, Phone), PK(EID, Phone), EID là FK→EMPLOYEE</p>

- D 

<p>Tạo bảng PHONE(Phone PK), không dùng FK tới EMPLOYEE</p>

---

## Câu 85: INT1313_ERD_607489

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Trong mô hình ER, ràng buộc toàn bộ của thực thể X vào quan hệ 1–N với thực thể Y có nghĩa là gì?</p>

### Đáp án
- A 

<p>Mọi thể hiện của Y đều phải tham gia vào quan hệ với X</p>

- B (Đúng ✓)

<p>Mọi thể hiện của X phải tham gia ít nhất một lần vào quan hệ với Y</p>

- C 

<p>Không có thể hiện nào của X được tham gia vào quan hệ với Y</p>

- D 

<p>Mỗi thể hiện của X chỉ được tham gia tối đa một lần với Y</p>

---

## Câu 86: INT1313_ERD MAPPING_558648

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/413e88a5-7b2b-4e12-9f71-ec73ef44eaa1/1764121600168_image.png"></p><p>Ánh xạ nào dưới đây tương ứng với quan hệ trên ?</p>

### Đáp án
- A 

<p>CONTAINS(OID PK, PID PK, Qty) không FK</p>

- B 

<p>PRODUCT(PID PK, OID, Qty)</p>

- C 

<p>ORDR(OID PK, PID, Qty)</p>

- D (Đúng ✓)

<p>ORDR(OID PK); PRODUCT(PID PK); CONTAINS(OID FK,PID FK,Qty, PK(OID,PID))</p>

---

## Câu 87: INT1313_ERD MAPPING_901869

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/b5b916f9-b7e9-4432-ba32-ad713b900616/1764122247498_image.png"></p><p>Mô hình quan hệ nào dưới đây tương ứng với ERD?</p>

### Đáp án
- A (Đúng ✓)

<p>ANIMAL(AID PK); DOG(AID PK/FK→ANIMAL,Breed); CAT(AID PK/FK→ANIMAL,Color)</p>

- B 

<p>ANIMAL(AID PK); TYPE(AID,Kind,Breed,Color)</p>

- C 

<p>DOG(AID PK,Breed); CAT(AID PK,Color)</p>

- D 

<p>ANIMAL(AID PK, Breed, Color)</p>

---

## Câu 88: INT1313_ERD MAPPING_719370

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho ERD:</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/50c51c51-cc6a-4db1-9710-69e8d56e0f96/1764122653873_image.png"></p><p>Quan hệ nào dưới đây thể hiện ERD trên?</p>

### Đáp án
- A 

<p>PERSON(PassID UNIQUE/FK→PASSPORT)</p>

- B 

<p>PERSON và PASSPORT không ràng buộc</p>

- C (Đúng ✓)

<p>PASSPORT(PID UNIQUE/FK→PERSON)</p>

- D 

<p>PERSON_PASS(PID,PassID)</p>

---

## Câu 89: INT1313_ERD MAPPING_981537

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/72fc7ee4-6cfa-42c8-a979-d911657e26d8/1764122555624_image.png"></p><p>Quan hệ nào dưới đây thể hiện ERD trên ?</p>

### Đáp án
- A 

<p>ASSIGN(EID PK, TID PK, Date) không FK</p>

- B (Đúng ✓)

<p>EMP(EID PK); TASK(TID PK); ASSIGN(EID FK,TID FK, Date, PK(EID,TID,Date))</p>

- C 

<p>EMP(EID PK, TID, Date)</p>

- D 

<p>TASK(TID PK, EID, Date)</p>

---

## Câu 90: INT1313_ERD MAPPING_743103

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/5e33a77b-1229-40f2-bca3-c03d96c3a519/1764122713160_image.png"></p><p>Quan hệ nào dưới đây thể hiện ERD trên?</p>

### Đáp án
- A 

<p>LIB(LID PK, BID)</p>

- B 

<p>LIB_BOOK(LID,BID)</p>

- C 

<p>BOOK(BID PK); LIB(LID PK, BID)</p>

- D (Đúng ✓)

<p>LIB(LID PK); BOOK(BID PK, LID FK→LIB)</p>

---

## Câu 91: INT1313_ERD MAPPING_009348

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho lược đồ ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/b9ca5825-5299-4d7a-8084-da023ed25f5c/1764123232700_image.png"></p><p>Quan hệ nào dưới đây thể hiện lược đồ trên?</p>

### Đáp án
- A 

<p>COURSE(SID UNIQUE/FK→SYLLABUS)</p>

- B 

<p>COURSE_SYLLABUS(CID,SID) PK(CID,SID)</p>

- C 

<p>COURSE(CID PK) và SYLLABUS(SID PK) không ràng buộc</p>

- D (Đúng ✓)

<p>SYLLABUS(CID UNIQUE/FK→COURSE)</p>

---

## Câu 92: INT1313_ERD MAPPING_748571

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho lược đồ ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/a4c8a28e-8fa2-4f74-ba17-d796c9edb3fa/1764123394545_image.png"></p><p><br></p><p>Quan hệ nào dưới đây thể hiện lược đồ trên ?</p>

### Đáp án
- A 

<p>VEHICLE(VID PK, Seats, Capacity)</p>

- B 

<p>VEHICLE(VID PK); VEHICLE_TYPE(VID, Type, Seats, Capacity)</p>

- C (Đúng ✓)

<p>VEHICLE(VID PK); CAR(VID PK/FK→VEHICLE, Seats); TRUCK(VID PK/FK→VEHICLE, Capacity)</p>

- D 

<p>CAR(VID PK, Seats); TRUCK(VID PK, Capacity)</p>

---

## Câu 93: INT1313_ERD MAPPING_459526

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho lược đồ ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/04c17257-441f-42c5-b5da-aec492418baa/1764123861174_image.png"></p><p>Quan hệ nào dưới đây thể hiện lược đồ trên ?</p>

### Đáp án
- A 

<p>PRESC(DoctorID,PatientID,PK(DoctorID,PatientID)); MED(MedID PK)</p>

- B 

<p>MED(MedID PK, Dose, Date)</p>

- C (Đúng ✓)

<p>PRESC(DoctorID FK, PatientID FK, MedID FK, Dose, Date, PK(DoctorID,PatientID,MedID,Date))</p>

- D 

<p>DOCTOR_PATIENT(DoctorID,PatientID,PK(DoctorID,PatientID)); PRESC(MedID,Dose,Date)</p>

---

## Câu 94: INT1313_ERD MAPPING_402066

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho lược đồ ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/e9475a30-bab4-4ab0-b70b-2abd4e74e5bd/1764123945794_image.png"></p><p>Quan hệ nào dưới thể hiện lược đô trên?</p>

### Đáp án
- A (Đúng ✓)

<p>SUPPLIER(SID PK); PART(PID PK); SUPPLY(SID FK, PID FK, Price, PK(SID,PID))</p>

- B 

<p>SUPPLIER(SID PK, PID FK, Price); PART(PID PK)</p>

- C 

<p>SUPPLIER_PART(SID PK, PID PK, Price)</p>

- D 

<p>PART(PID PK, SID FK, Price); SUPPLIER(SID PK)</p>

---

## Câu 95: INT1313_ERD MAPPING_273838

- Danh mục: ERD Mapping
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Thực thể Product có thuộc tính Tag đa trị. Quan hệ nào dưới là đúng?</p>

### Đáp án
- A 

<p>TAG(Tag PK); PRODUCT(PID PK, Tag FK)</p>

- B (Đúng ✓)

<p>PRODUCT(PID PK); PRODUCT_TAG(PID FK, Tag, PK(PID,Tag))</p>

- C 

<p>PRODUCT(PID PK, Tags TEXT)</p>

- D 

<p>PRODUCT(PID PK, Tag1, Tag2, Tag3)</p>

---

## Câu 96: INT1313_CHUẨN HÓA_616307

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C,D), F={AB→C, CD→A}. Khóa là?</p>

### Đáp án
- A 

<p>AB</p>

- B (Đúng ✓)

<p>ABD, BCD</p>

- C 

<p>AC</p>

- D 

<p>CD</p>

---

## Câu 97: INT1313_CHUẨN HÓA_505466

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C), F={A→B, B→A, B→C}. Dạng chuẩn cao nhất mà quan hệ đáp ứng?</p>

### Đáp án
- A 

<p>3NF</p>

- B 

<p>2NF</p>

- C (Đúng ✓)

<p>BCNF</p>

- D 

<p>1NF</p>

---

## Câu 98: INT1313_CHUẨN HÓA_509472

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C,D), F={AB→C, C→D}. Quan hệ nào dư thừa?</p>

### Đáp án
- A (Đúng ✓)

<p>C thuộc quan hệ AB→C nếu tách không khéo</p>

- B 

<p>Không có</p>

- C 

<p>B</p>

- D 

<p>A</p>

---

## Câu 99: INT1313_CHUẨN HÓA_611338

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C), F={A↔B, B→C}. Khóa là?</p>

### Đáp án
- A 

<p>A</p>

- B 

<p>AB</p>

- C 

<p>B</p>

- D (Đúng ✓)

<p>A, B</p>

---

## Câu 100: INT1313_CHUẨN HÓA_613763

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C,D), F={A→B, B→C, C→D}. Dạng chuẩn cao nhất mà quan hệ đáp ứng?</p>

### Đáp án
- A (Đúng ✓)

<p>2NF</p>

- B 

<p>BCNF</p>

- C 

<p>1NF</p>

- D 

<p>3NF (không BCNF)</p>

---

## Câu 101: INT1313_CHUẨN HÓA_496183

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C), F={AB→C, C→A}. Khóa là?</p>

### Đáp án
- A 

<p>AC</p>

- B (Đúng ✓)

<p>AB, BC</p>

- C 

<p>BC</p>

- D 

<p>AB</p>

---

## Câu 102: INT1313_CHUẨN HÓA_739262

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C,D), F={A↔B, C→D}. Dạng chuẩn cao nhất mà quan hệ đáp ứng?</p>

### Đáp án
- A 

<p>3NF</p>

- B 

<p>1NF</p>

- C (Đúng ✓)

<p>BCNF</p>

- D 

<p>2NF</p>

---

## Câu 103: INT1313_CHUẨN HÓA_982881

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C), F={A→B, B→C}. Quan hệ vi phạm dạng chuẩn nào?</p>

### Đáp án
- A 

<p>BCNF</p>

- B (Đúng ✓)

<p>2NF</p>

- C 

<p>Không vi phạm</p>

- D 

<p>3NF</p>

---

## Câu 104: INT1313_CHUẨN HÓA_790914

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C,D), F={A→B, B→C}. Khóa là?</p>

### Đáp án
- A 

<p>AD</p>

- B (Đúng ✓)

<p>A</p>

- C 

<p>AC</p>

- D 

<p>AB</p>

---

## Câu 105: INT1313_CHUẨN HÓA_047964

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C), F={A→B}. Khóa là?</p>

### Đáp án
- A 

<p>B</p>

- B 

<p>AB</p>

- C (Đúng ✓)

<p>AC</p>

- D 

<p>C</p>

---

## Câu 106: INT1313_CHUẨN HÓA_630488

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C,D), F={A→B, B→C, C→D}. Dạng chuẩn cao nhất mà quan hệ đáp ứng là?</p>

### Đáp án
- A 

<p>3NF (không BCNF)</p>

- B (Đúng ✓)

<p>2NF (không 3NF)</p>

- C 

<p>BCNF</p>

- D 

<p>1NF</p>

---

## Câu 107: INT1313_CHUẨN HÓA_338720

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C,D), F={AB→C, C→D}. Siêu khóa nào đúng?</p>

### Đáp án
- A 

<p>AC</p>

- B 

<p>A</p>

- C (Đúng ✓)

<p>AB</p>

- D 

<p>C</p>

---

## Câu 108: INT1313_CHUẨN HÓA_588347

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ  R(A,B,C,D), F={A→B, B→C, C→D}. Khóa ứng viên là?</p>

### Đáp án
- A (Đúng ✓)

<p>A</p>

- B 

<p>BC</p>

- C 

<p>AB</p>

- D 

<p>AC</p>

---

## Câu 109: INT1313_CHUẨN HÓA_931893

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ  R(A,B,C), F={A↔B, B→C}. Dạng chuẩn cao nhất mà quan hệ đáp ứng là?</p>

### Đáp án
- A 

<p>3NF</p>

- B 

<p>2NF</p>

- C 

<p>1NF</p>

- D (Đúng ✓)

<p>BCNF</p>

---

## Câu 110: INT1313_CHUẨN HÓA_449815

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho quan hệ  R(A,B,C) có khóa AB; F có A→C.Quan hệ vi phạm chuẩn nào dưới đây?</p>

### Đáp án
- A 

<p>BCNF</p>

- B 

<p>3NF (bắc cầu)</p>

- C (Đúng ✓)

<p>2NF (phụ thuộc bộ phận)</p>

- D 

<p>Không vi phạm</p>

---

## Câu 111: INT1313_CHUẨN HÓA_519438

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho quan hệ  R(A,B,C,D), F={A↔B, C→D}. Khóa ứng viên là?</p>

### Đáp án
- A (Đúng ✓)

<p>{AC, BC}</p>

- B 

<p>{AB}</p>

- C 

<p>{C}</p>

- D 

<p>{A}</p>

---

## Câu 112: INT1313_CHUẨN HÓA_904419

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C), F={AB→C, C→B}. Tập khóa ứng viên là?</p>

### Đáp án
- A 

<p>{C}</p>

- B 

<p>{A,B,C}</p>

- C (Đúng ✓)

<p>{AB, AC}</p>

- D 

<p>{A}</p>

---

## Câu 113: INT1313_CHUẨN HÓA_516017

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Cho quan hệ  R(A,B,C), F={A→B, B→C}. Dạng chuẩn cao nhất mà quan hệ đáp ứng?</p>

### Đáp án
- A (Đúng ✓)

<p>2NF (không 3NF)</p>

- B 

<p>3NF (không BCNF)</p>

- C 

<p>1NF</p>

- D 

<p>BCNF</p>

---

## Câu 114: INT1313_CHUẨN HÓA_886343

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ  R(A,B,C,D), F={A→B, C→D}. Khóa ứng viên là?</p>

### Đáp án
- A 

<p>AD</p>

- B 

<p>C</p>

- C (Đúng ✓)

<p>AC</p>

- D 

<p>A</p>

---

## Câu 115: INT1313_CHUẨN HÓA_845535

- Danh mục: Chuẩn hóa
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho quan hệ R(A,B,C), F={A→B, B→C}. Khóa ứng viên là?</p>

### Đáp án
- A 

<p>AC</p>

- B 

<p>BC</p>

- C (Đúng ✓)

<p>A</p>

- D 

<p>AB</p>

---

## Câu 116: INT1313_PHUCJ THUỘC HÀM_370358

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={AB→C, BC→D, CD→A, AD→B}. Khẳng định nào dưới đây là đúng?</p>

### Đáp án
- A 

<p>Không có khóa</p>

- B 

<p>Chỉ BC là khóa</p>

- C 

<p>Chỉ AB là khóa</p>

- D (Đúng ✓)

<p>Mọi vế trái là khóa</p>

---

## Câu 117: INT1313_PHUCJ THUỘC HÀM_593806

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={A→B, B→A, B→C}. <span class="ql-formula" data-value="A^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">A^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span> là?</p>

### Đáp án
- A 

<p>{B,C}</p>

- B 

<p>{A,B}</p>

- C (Đúng ✓)

<p>{A,B,C}</p>

- D 

<p>{A}</p>

---

## Câu 118: INT1313_PHUCJ THUỘC HÀM_018419

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={AB→C, C→A}. Phụ thuộc nào suy ra được?</p>

### Đáp án
- A 

<p>B→A</p>

- B (Đúng ✓)

<p>AB→A</p>

- C 

<p>A→B</p>

- D 

<p>C→B</p>

---

## Câu 119: INT1313_PHUCJ THUỘC HÀM_169412

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={AB→C, C→E, E→D}.  <span class="ql-formula" data-value="A^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">A^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span> là?</p>

### Đáp án
- A 

<p>{A,C}</p>

- B 

<p>{A,B}</p>

- C (Đúng ✓)

<p>{A}</p>

- D 

<p>{A,E}</p>

---

## Câu 120: INT1313_PHUCJ THUỘC HÀM_940291

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={A→B, B→C, AC→D}. <span class="ql-formula" data-value="A^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">A^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span>chứa?</p>

### Đáp án
- A (Đúng ✓)

<p>{A,B,C,D}</p>

- B 

<p>{A,B}</p>

- C 

<p>{A,D}</p>

- D 

<p>{A,C}</p>

---

## Câu 121: INT1313_PHUCJ THUỘC HÀM_502669

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>F={A→B, B→C, C→D}. Mệnh đề đúng?</p>

### Đáp án
- A 

<p>AB↛D</p>

- B 

<p>B→A</p>

- C (Đúng ✓)

<p>A→D</p>

- D 

<p>D→A</p>

---

## Câu 122: INT1313_PHUCJ THUỘC HÀM_601441

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>F={AB→C, C→D, D→A}. Khóa của R(A,B,C,D)?</p>

### Đáp án
- A 

<p>BD</p>

- B (Đúng ✓)

<p>AB</p>

- C 

<p>AD</p>

- D 

<p>AC</p>

---

## Câu 123: INT1313_PHUCJ THUỘC HÀM_312992

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>F={A→BC, B→D, C→E}. <span class="ql-formula" data-value="A^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">A^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span>là?</p>

### Đáp án
- A 

<p>{A,C,E}</p>

- B 

<p>{A,B,C}</p>

- C 

<p>{A,B,D}</p>

- D (Đúng ✓)

<p>{A,B,C,D,E}</p>

---

## Câu 124: INT1313_PHUCJ THUỘC HÀM_499623

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, A→C}. Phủ tối thiểu tương đương?</p>

### Đáp án
- A 

<p>{B→C}</p>

- B (Đúng ✓)

<p>{A→BC}</p>

- C 

<p>{AB→C}</p>

- D 

<p>{A→B}</p>

---

## Câu 125: INT1313_PHUCJ THUỘC HÀM_073792

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C}. <span class="ql-formula" data-value="AB^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><msup><mi>B</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">AB^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord mathnormal">A</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0502em;">B</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span> là?</p>

### Đáp án
- A 

<p>{A,B}</p>

- B (Đúng ✓)

<p>{A,B,C}</p>

- C 

<p>{B,C}</p>

- D 

<p>{A}</p>

---

## Câu 126: INT1313_PHUCJ THUỘC HÀM_836078

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={AB→C, C→E, E→D}. <span class="ql-formula" data-value="(AB)^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mi>B</mi><msup><mo stretchy="false">)</mo><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">(AB)^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.0213em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right: 0.0502em;">B</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span>là?</p>

### Đáp án
- A 

<p>{A,B,C,E}</p>

- B 

<p>{A,B,C}</p>

- C 

<p>{A,B,D}</p>

- D (Đúng ✓)

<p>{A,B,C,E,D}</p>

---

## Câu 127: INT1313_PHUCJ THUỘC HÀM_339592

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={A→B, B→C, C→A}. <span class="ql-formula" data-value="A^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">A^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span>là?</p>

### Đáp án
- A 

<p>{A}</p>

- B (Đúng ✓)

<p>{A,B,C}</p>

- C 

<p>{B,C}</p>

- D 

<p>{A,B}</p>

---

## Câu 128: INT1313_PHUCJ THUỘC HÀM_324673

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: multipleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>R(A,B,C,D), F={AB→C, C→D, D→A}. Khóa tối thiểu nào có thể?</p>

### Đáp án
- A 

<p>AC</p>

- B (Đúng ✓)

<p>BD</p>

- C 

<p>AD</p>

- D (Đúng ✓)

<p>AB</p>

---

## Câu 129: INT1313_PHUCJ THUỘC HÀM_968756

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={A→B, B→C, CD→E}. <span class="ql-formula" data-value="AD^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><msup><mi>D</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">AD^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord mathnormal">A</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0278em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span> là?</p>

### Đáp án
- A 

<p>{A,B,D}</p>

- B 

<p>{A,B,C,D}</p>

- C (Đúng ✓)

<p>{A,B,C,D,E}</p>

- D 

<p>{A,C,D,E}</p>

---

## Câu 130: INT1313_PHUCJ THUỘC HÀM_867758

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>F={A→B, B→C, AC→D}. Mệnh đề đúng?</p>

### Đáp án
- A 

<p>B→D</p>

- B (Đúng ✓)

<p>A→D</p>

- C 

<p>D→A</p>

- D 

<p>C→D</p>

---

## Câu 131: INT1313_PHUCJ THUỘC HÀM_333952

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>F={AB→C, C→A}. Phụ thuộc nào đúng?</p>

### Đáp án
- A 

<p>A→B</p>

- B 

<p>B→A</p>

- C 

<p>C→B</p>

- D (Đúng ✓)

<p>AB→A</p>

---

## Câu 132: INT1313_PHUCJ THUỘC HÀM_720286

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>F={A→B, B→C}. <span class="ql-formula" data-value="BC^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><msup><mi>C</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">BC^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord mathnormal" style="margin-right: 0.0502em;">B</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0715em;">C</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span> là?</p>

### Đáp án
- A (Đúng ✓)

<p>{B,C}</p>

- B 

<p>{C}</p>

- C 

<p>{B}</p>

- D 

<p>{A,B,C}</p>

---

## Câu 133: INT1313_PHUCJ THUỘC HÀM_466309

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>F={A→BC, C→D, D→E}. <span class="ql-formula" data-value="A^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">A^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span> là?</p>

### Đáp án
- A 

<p>{A,D,E}</p>

- B 

<p>{A,B,C}</p>

- C 

<p>{A,B,D}</p>

- D (Đúng ✓)

<p>{A,B,C,D,E}</p>

---

## Câu 134: INT1313_PHUCJ THUỘC HÀM_299289

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={AB→C, C→D}. <span class="ql-formula" data-value="AB^+">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><msup><mi>B</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">AB^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7713em;"></span><span class="mord mathnormal">A</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0502em;">B</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7713em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span></span>﻿</span> là?</p>

### Đáp án
- A (Đúng ✓)

<p>{A,B,C,D}</p>

- B 

<p>{A,B,D}</p>

- C 

<p>{A,B}</p>

- D 

<p>{A,B,C}</p>

---

## Câu 135: INT1313_PHUCJ THUỘC HÀM_777379

- Danh mục: Phucj thuộc hàm
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>F={A→B, B→C}. Mệnh đề suy ra đúng?</p>

### Đáp án
- A 

<p>C→B</p>

- B (Đúng ✓)

<p>A→C</p>

- C 

<p>AB↛C</p>

- D 

<p>C→A</p>

---

## Câu 136: INT1313_ERD LY THUYET_838694

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho lược đồ ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/5d35355b-486f-40de-af05-04a8f4c10010/1764124801927_image.png"></p><p>Quan hệ nào dưới đây thể hiện lược đồ trên ?</p>

### Đáp án
- A 

<p>TEAM(TID PK, TrID FK, Result); TOURN(TrID PK)</p>

- B (Đúng ✓)

<p>TEAM(TID PK); TOURN(TrID PK); PARTICIPATE(TID FK, TrID FK, Result, PK(TID,TrID))</p>

- C 

<p>TEAM(TID PK); TOURN(TrID PK, TID FK, Result)</p>

- D 

<p>PARTICIPATE(TID PK, TrID PK, Result) (không FK)</p>

---

## Câu 137: INT1313_ERD LY THUYET_397364

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Chọn phát biểu ĐÚNG về ánh xạ mối quan hệ ba ngôi (ternary) A–R–B–C có thuộc tính r (ví dụ Role):</p>

### Đáp án
- A 

<p>Chỉ cần hai FK vì một FK có thể suy ra</p>

- B 

<p>Tạo ba bảng trung gian mỗi bảng chứa hai FK</p>

- C (Đúng ✓)

<p>Tạo bảng R(A_id FK, B_id FK, C_id FK, r, PK(A_id,B_id,C_id))</p>

- D 

<p>Tách R thành ba mối quan hệ nhị phân; thêm r vào một mối bất kỳ</p>

---

## Câu 138: INT1313_ERD LY THUYET_671376

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Chọn cách ánh xạ đúng cho self-relationship Course—Prerequisite—Course (N–N) có học kỳ Sem:</p>

### Đáp án
- A (Đúng ✓)

<p>PREREQ(CID FK, PreCID FK, Sem, PK(CID,PreCID))</p>

- B 

<p>Bảng trung gian PREREQ(CID,PreCID) không FK</p>

- C 

<p>Thêm cột PreCID vào COURSE, PK(CID,PreCID)</p>

- D 

<p>COURSE(CID) và một cột JSON lưu danh sách PreCID</p>

---

## Câu 139: INT1313_ERD LY THUYET_938582

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Với quan hệ 1–N, nếu phía N là tham gia toàn bộ, lựa chọn thiết kế nào giúp đảm bảo ràng buộc ở mức CSDL?</p>

### Đáp án
- A (Đúng ✓)

<p>Đặt FK NOT NULL ở phía N và (nếu cần) thêm ràng buộc ON DELETE RESTRICT</p>

- B 

<p>Không dùng FK, quản lý ở tầng ứng dụng</p>

- C 

<p>Đặt FK có thể NULL để linh hoạt</p>

- D 

<p>Dùng trigger để cập nhật ngược</p>

---

## Câu 140: INT1313_ERD LY THUYET_829132

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Trong mô hình quan hệ, một 'thuộc tính đa trị'  từ ER khi ánh xạ sang lược đồ quan hệ thường được biểu diễn bằng…</p>

### Đáp án
- A 

<p>Danh sách giá trị phân tách bởi dấu phẩy trong một cột</p>

- B (Đúng ✓)

<p>Bảng phụ (owner_id, value) với PK(owner_id, value)</p>

- C 

<p>Một cột TEXT NOT NULL</p>

- D 

<p>Một cột JSON bắt buộc</p>

---

## Câu 141: INT1313_ERD LY THUYET_071984

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Cho lược đồ: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/01e4165b-e420-4a0c-affe-97a58f78b161/1764124915646_image.png"></p><p>Quan hệ nào đưới đây thể hiện lược đồ trên?</p>

### Đáp án
- A 

<p>PERSON chứa tất cả cột của Student và Staff, bỏ hai bảng con</p>

- B 

<p>STUDENT(SID PK,…); STAFF(StaffID PK,…); không cần bảng PERSON</p>

- C (Đúng ✓)

<p>PERSON(PID PK,…); STUDENT(PID PK/FK→PERSON,…); STAFF(PID PK/FK→PERSON,…)</p>

- D 

<p>PERSON(PID PK,…); STUDENT(SID PK,…); STAFF(StaffID PK,…)</p>

---

## Câu 142: INT1313_ERD LY THUYET_281657

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Hard

### Nội dung câu hỏi

<p>Một lược đồ có ràng buộc: Course(1) — has — Syllabus(1) và cả hai phía đều tham gia toàn thể. Cách ánh xạ giữ ràng buộc 1–1 chặt chẽ nhất trong SQL?</p>

### Đáp án
- A (Đúng ✓)

<p>Đặt FK duy nhất (UNIQUE) ở một phía và đồng thời đặt cột đó là PK của bảng phụ thuộc</p>

- B 

<p>Đặt CHECK constraint trên cả hai bảng</p>

- C 

<p>Giữ hai bảng độc lập không FK để tránh vòng phụ thuộc</p>

- D 

<p>Tạo bảng ghép COURSE_SYLLABUS(CID,SID) PK(CID,SID)</p>

---

## Câu 143: INT1313_ERD LY THUYET_550016

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Trong ER, thuộc tính tổng hợp Address{Street, City, Zip} của Customer khi ánh xạ sang mô hình quan hệ nên được biểu diễn như thế nào?</p>

### Đáp án
- A 

<p>Ghép các thành phần vào khóa chính của CUSTOMER</p>

- B 

<p>Tạo bảng ADDRESS riêng không có khóa ngoại</p>

- C (Đúng ✓)

<p>Tách thành các cột riêng trong cùng bảng CUSTOMER (Street, City, Zip)</p>

- D 

<p>Lưu Address vào một cột TEXT duy nhất</p>

---

## Câu 144: INT1313_ERD LY THUYET_847801

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Medium

### Nội dung câu hỏi

<p>Khi ánh xạ mối quan hệ N–N có thuộc tính mô tả (như Quantity), lựa chọn đúng là?</p>

### Đáp án
- A 

<p>Gộp thuộc tính mô tả vào một trong hai bảng thực thể</p>

- B (Đúng ✓)

<p>Tạo bảng quan hệ trung gian với khóa là (FK1, FK2) và thêm các thuộc tính mô tả</p>

- C 

<p>Tạo cột lặp (repeating groups) trong một bảng</p>

- D 

<p>Dùng một khóa ngoại chuỗi để tham chiếu cả hai bảng</p>

---

## Câu 145: INT1313_ERD LY THUYET_558070

- Danh mục: ERD Ly thuyet
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Trong lược đồ quan hệ, thuộc tính dẫn xuất  của ER thường được xử lý thế nào khi ánh xạ sang quan hệ?</p>

### Đáp án
- A 

<p>Ghép vào khóa chính</p>

- B 

<p>Luôn tạo bảng riêng cho thuộc tính này</p>

- C (Đúng ✓)

<p>Bỏ qua và tính bằng view/truy vấn khi cần</p>

- D 

<p>Bắt buộc lưu thành một cột NOT NULL</p>

---

## Câu 146: INT1313_S3_628104

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Đây là chỉ dẫn<img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/2d8b1c8b-b6da-4c28-8bb4-cde4bf0c6332/1763737177036_Screenshot_2025-11-21_090919.png"></p>

### Đáp án
- A (Đúng ✓)

<p>Đây là đáp án 1<img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/2d8b1c8b-b6da-4c28-8bb4-cde4bf0c6332/1763737195556_Screenshot_2025-11-04_201808.png"></p>

- B 

<p>Đây là đáp án 2</p><p><span style="font-size: 28px;"><span class="ql-formula" data-value="\sigma_{a&gt;5}(projection)\bowtie\cup\cap">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>σ</mi><mrow><mi>a</mi><mo>&gt;</mo><mn>5</mn></mrow></msub><mo stretchy="false">(</mo><mi>p</mi><mi>r</mi><mi>o</mi><mi>j</mi><mi>e</mi><mi>c</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi><mo stretchy="false">)</mo><mo>⋈</mo><mo>∪</mo><mo>∩</mo></mrow><annotation encoding="application/x-tex">\sigma_{a&gt;5}(projection)\bowtie\cup\cap</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">σ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3011em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">a</span><span class="mrel mtight">&gt;</span><span class="mord mtight">5</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1774em;"><span class=""></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mord mathnormal">ro</span><span class="mord mathnormal" style="margin-right: 0.0572em;">j</span><span class="mord mathnormal">ec</span><span class="mord mathnormal">t</span><span class="mord mathnormal">i</span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">⋈</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.5556em;"></span><span class="mord">∪</span><span class="mord">∩</span></span></span></span></span>﻿</span></span></p>

- C 

<pre class="ql-syntax" spellcheck="false">Đáp án 3
</pre>

- D 

<ol><li class="ql-indent-4"><strong><em>Đáp án 4<span class="ql-cursor">﻿</span></em></strong></li></ol>

---

## Câu 147: INT1313_S5_354915

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD:</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/c40271e3-356d-4801-91c9-52b3d72b4e74/1763223654477_INT1313_S5_354915.png"></p><p>Hãy chọn lược đồ tương ứng.</p>

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

## Câu 148: INT1313_S5_267696

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD .</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/b7d7ea1c-8d98-4d8b-b5d2-0fb692b7a940/1763224165868_INT1313_S5_267696.png"></p><p>Hãy chọn lược đồ tương ứng.</p>

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

## Câu 149: INT1313_S5_901186

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/85f9d738-48c3-4a2d-b2eb-6a5d65d734eb/1763220916861_INT1313_S5_901186.png"></p><p>Hãy chọn lược đồ tương ứng.</p>

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

## Câu 150: INT1313_S5_427602

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD:</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/dbc32544-08a0-4506-b87b-ad2e79a8621e/1763118687752_INT1313_S5_427602.png"></p><p>Chọn ánh xạ thể hiện đúng quan hệ.</p>

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

## Câu 151: INT1313_S5_810131

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD:</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/b9c97eb4-d3fb-4166-914f-d68e24b619b7/1763221158057_INT1313_S5_810131.png"></p><p><br></p><p>Hãy chọn lược đồ tương ứng.</p>

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

## Câu 152: INT1313_S5_070754

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

## Câu 153: INT1313_S5_112937

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD:</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/f2224b4e-0f69-4d6e-af0a-39b9adc53b64/1763221515016_INT1313_S5_112937.png"></p><p>Hãy chọn lược đồ tương ứng.</p>

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

## Câu 154: INT1313_S5_647218

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/42096430-59c2-4318-9990-5502b947e10e/1763223493959_INT1313_S5_647218.png"></p><p>Hãy chọn chọn lược đồ đúng.</p>

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

## Câu 155: INT1313_S5_031135

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD: </p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/66915e76-c736-4e1b-b5e6-902e4da566ad/1763223911767_INT1313_S5_031135.png"></p><p>Hãy chọn lược đồ quan hệ đúng.</p>

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

## Câu 156: INT1313_S5_860356

- Danh mục: Ánh xạ ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho ERD:</p><p><img src="https://dbapi.ptit.edu.vn/api/assignment/exam-media/files/questions/87273bc9-c2f2-4568-9244-da1eb93928eb/1763224031956_INT1313_S5_860356.png"></p><p>Hãy chọn lược đồ tương ứng.</p>

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

## Câu 157: INT1313_S4_224519

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

## Câu 158: INT1313_S4_906881

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

## Câu 159: INT1313_S4_881538

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

## Câu 160: INT1313_S4_733015

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

## Câu 161: INT1313_S4_578743

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

## Câu 162: INT1313_S4_854810

- Danh mục: Chuẩn hóa CSDL
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>R(A,B,C,D), F={A↔B <em>(A→B,B→A)</em>, C→D}. Khóa ứng viên là?</p>

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

## Câu 163: INT1313_S4_647241

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

## Câu 164: INT1313_S4_582639

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

## Câu 165: INT1313_S4_214894

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

## Câu 166: INT1313_S4_374572

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

## Câu 167: INT1313_S3_456047

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Tính phân phối đúng của phép chọn trên quan hệ được tạo bởi hợp:</p>

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

## Câu 168: INT1313_S3_050992

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho R(A,B), S(B,C), phép chiếu π_{A,C}(R ⋈ S) tương đương với đáp án nào dưới đây</p>

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

## Câu 169: INT1313_S3_293021

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>RA làm việc theo ngữ nghĩa tập hợp (Set semantic). Phép SQL tương ứng với hợp trong RA là:</p>

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

## Câu 170: INT1313_S3_767966

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Đẳng thức ngữ nghĩa nào dưới đây luôn đúng trong đại số quan hệ?</p>

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

## Câu 171: INT1313_S3_883051

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

## Câu 172: INT1313_S3_545420

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Với R(A,B) và S(B), biểu thức trả về các bộ của R không có B khớp trong S :</p>

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

## Câu 173: INT1313_S3_383366

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Giả sử ta có quan hệ R(A, B) và một tập giá trị B trong quan hệ S(B).</p><p> Giá trị A nào dưới đây được chọn theo tiêu chí: “A phải kết hợp với <em>tất cả</em> các giá trị B có trong S”?</p>

### Đáp án
- A 

<p>Các cặp (A, B) không xuất hiện trong S</p>

- B 

<p>Các giá trị A xuất hiện với ít nhất một giá trị B trong S</p>

- C 

<p>Các giá trị B xuất hiện với mọi giá trị A trong R</p>

- D (Đúng ✓)

<p>Các giá trị A xuất hiện cùng mọi giá trị B trong S</p>

---

## Câu 174: INT1313_S3_928092

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

## Câu 175: INT1313_S3_908812

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

## Câu 176: INT1313_S3_972455

- Danh mục: Đại số quan hệ
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Với quan hệ E, mệnh đề tương đương nào đúng? σ_{age&gt;30}(σ_{dept='IT'}(E)) = ?</p>

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

## Câu 177: INT1313_S2_947260

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

## Câu 178: INT1313_S2_385754

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

## Câu 179: INT1313_S2_970433

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

## Câu 180: INT1313_S2_125704

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

## Câu 181: INT1313_S2_082369

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

## Câu 182: INT1313_S2_140949

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

## Câu 183: INT1313_S2_906636

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

## Câu 184: INT1313_S2_140619

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

## Câu 185: INT1313_S2_629006

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

## Câu 186: INT1313_S2_712735

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

## Câu 187: INT1313_S2_898106

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

## Câu 188: INT1313_S2_662307

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

## Câu 189: INT1313_S2_016003

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

## Câu 190: INT1313_S2_043287

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

## Câu 191: INT1313_S2_224303

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

## Câu 192: INT1313_S2_652255

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

## Câu 193: INT1313_S2_697255

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

## Câu 194: INT1313_S2_722805

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

## Câu 195: INT1313_S2_197902

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

## Câu 196: INT1313_S2_638440

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

## Câu 197: INT1313_S1_581909

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

## Câu 198: INT1313_S1_394363

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

## Câu 199: INT1313_S1_803618

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

## Câu 200: INT1313_S1_755452

- Danh mục: ERD
- Loại câu hỏi: singleChoice
- Độ khó: Easy

### Nội dung câu hỏi

<p>Cho hình ERD, hỏi đây là loại mối quan hệ nào? </p><p><span class="ql-formula" data-value="\fbox{\textbf{NHANVIEN}}
\rule{1.5cm}{0.4pt}
\Big&lt; \text{thamgia} \Big&gt;
\rule{1.5cm}{0.4pt}
\fbox{\textbf{DUAN}}">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mtext mathvariant="bold">NHANVIEN</mtext></mstyle></menclose><mpadded height="0em" voffset="0em"><mspace mathbackground="black" width="4.2679em" height="0.04em"></mspace></mpadded><mo fence="false" stretchy="true" minsize="1.8em" maxsize="1.8em">&lt;</mo><mtext>thamgia</mtext><mo fence="false" stretchy="true" minsize="1.8em" maxsize="1.8em">&gt;</mo><mpadded height="0em" voffset="0em"><mspace mathbackground="black" width="4.2679em" height="0.04em"></mspace></mpadded><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mtext mathvariant="bold">DUAN</mtext></mstyle></menclose></mrow><annotation encoding="application/x-tex">\fbox{\textbf{NHANVIEN}}
\rule{1.5cm}{0.4pt}
\Big&lt; \text{thamgia} \Big&gt;
\rule{1.5cm}{0.4pt}
\fbox{\textbf{DUAN}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.8em; vertical-align: -0.65em;"></span><span class="mord"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.0261em;"><span class="" style="top: -3.3661em;"><span class="pstrut" style="height: 3.3661em;"></span><span class="boxpad"><span class="mord"><span class="mord text"><span class="mord textbf">NHANVIEN</span></span></span></span></span><span class="" style="top: -3.0261em;"><span class="pstrut" style="height: 3.3661em;"></span><span class="stretchy fbox" style="height: 1.3661em; border-style: solid; border-width: 0.04em;"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.34em;"><span class=""></span></span></span></span></span><span class="mord rule" style="border-right-width: 4.2679em; border-top-width: 0.04em; bottom: 0em;"></span><span class="mord"><span class="delimsizing size2">⟨</span></span><span class="mord text"><span class="mord">thamgia</span></span><span class="mord"><span class="delimsizing size2">⟩</span></span><span class="mord rule" style="border-right-width: 4.2679em; border-top-width: 0.04em; bottom: 0em;"></span><span class="mord"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 1.0261em;"><span class="" style="top: -3.3661em;"><span class="pstrut" style="height: 3.3661em;"></span><span class="boxpad"><span class="mord"><span class="mord text"><span class="mord textbf">DUAN</span></span></span></span></span><span class="" style="top: -3.0261em;"><span class="pstrut" style="height: 3.3661em;"></span><span class="stretchy fbox" style="height: 1.3661em; border-style: solid; border-width: 0.04em;"></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.34em;"><span class=""></span></span></span></span></span></span></span></span></span>﻿</span></p><p>Trong đó:</p><ul><li><span class="ql-formula" data-value="\Big&lt; \text{XXXX} \Big&gt;">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo fence="false" stretchy="true" minsize="1.8em" maxsize="1.8em">&lt;</mo><mtext>XXXX</mtext><mo fence="false" stretchy="true" minsize="1.8em" maxsize="1.8em">&gt;</mo></mrow><annotation encoding="application/x-tex">\Big&lt; \text{XXXX} \Big&gt;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.8em; vertical-align: -0.65em;"></span><span class="mord"><span class="delimsizing size2">⟨</span></span><span class="mord text"><span class="mord">XXXX</span></span><span class="mord"><span class="delimsizing size2">⟩</span></span></span></span></span></span>﻿</span>: quan hệ</li></ul>

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

## Câu 201: INT1313_S1_111533

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

## Câu 202: INT1313_S1_292752

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

## Câu 203: INT1313_S1_952931

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

## Câu 204: INT1313_S1_933868

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

## Câu 205: INT1313_S1_473203

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

## Câu 206: INT1313_S1_257042

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

