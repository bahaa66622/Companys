# Company Management System

نظام إدارة شركات داخلي متكامل مبني على **Next.js 14** و **Prisma + PostgreSQL** و **NextAuth (JWT)** مع صلاحيات دقيقة حسب الدور وواجهات Dashboard حديثة.

## التقنية
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- GSAP Animations
- Prisma ORM + PostgreSQL
- NextAuth Credentials + JWT

## الأدوار والصلاحيات
- **Super Admin**: إنشاء الشركات وتعيين مدير شركة وإضافة المستخدمين.
- **Company Manager**: إنشاء الأقسام وربط الموظفين بالأقسام.
- **Department Head**: إنشاء مهام القسم ومراجعة تقارير الموظفين.
- **Employee**: تحديث حالة المهام وإرسال التقارير.

## المجلدات
```bash
/app
 ├── auth
 ├── dashboard
 │    ├── admin
 │    ├── manager
 │    ├── head
 │    └── employee
 ├── api
/lib
/components
/prisma
```

## التشغيل
```bash
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run dev
```

## API Endpoints
- `POST /api/auth/register`
- `GET/POST/PATCH /api/companies`
- `GET/POST /api/departments`
- `GET/PATCH /api/users`
- `GET/POST/PATCH /api/tasks`
- `GET/POST /api/reports`

## ملاحظات
- Middleware يطبق RBAC على صفحات الداشبورد.
- GSAP مفعّل في Transition, Cards, Sidebar, Counters.
- الواجهات جاهزة للتوسع وربطها بأي نظام إشعارات/ملفات لاحقًا.
