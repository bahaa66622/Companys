# Company Management System

نظام داخلي احترافي لإدارة الشركات والأقسام والموظفين والمهام والتقارير باستخدام Next.js 14 + Prisma + NextAuth.

## ✅ Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- GSAP animations
- NextAuth (JWT + Credentials)
- Prisma + PostgreSQL

## 📁 Project Structure
```bash
/app
 ├── auth
 ├── dashboard
 │    ├── manager
 │    ├── head
 │    └── employee
 ├── api
 │    ├── auth
 │    ├── companies
 │    ├── departments
 │    ├── users
 │    ├── tasks
 │    └── reports
/lib
 ├── prisma
 ├── auth
 ├── permissions
 └── utils
```

## 🚀 Setup
1. انسخ المتغيرات البيئية:
```bash
cp .env.example .env
```
2. ثبت الحزم:
```bash
npm install
```
3. نفذ الترحيلات:
```bash
npx prisma migrate dev --name init
```
4. شغّل المشروع:
```bash
npm run dev
```

## 🔐 Roles
- **SUPER_ADMIN**: إنشاء الشركات وتعيين المدراء.
- **COMPANY_MANAGER**: إنشاء الأقسام وإدارة المستخدمين.
- **DEPARTMENT_HEAD**: إدارة مهام القسم ومتابعة التقارير.
- **EMPLOYEE**: تحديث المهام وإرسال التقارير.

## 🧠 APIs
- `POST /api/auth/register`
- `GET/POST /api/companies`
- `GET/POST /api/departments`
- `GET/PATCH /api/users`
- `GET/POST/PATCH /api/tasks`
- `GET/POST /api/reports`
