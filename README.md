# Company Management System

نظام إدارة شركات داخلي احترافي مبني على **Next.js 14 + Prisma + NextAuth + Tailwind + GSAP** مع صلاحيات كاملة ومتعددة الأدوار.

## ✅ المزايا الأساسية
- مصادقة JWT مع NextAuth (Credentials).
- RBAC فعلي للأدمن، مدير الشركة، رئيس القسم، الموظف.
- لوحات تحكم موسعة لكل دور مع عمليات حقيقية.
- API Routes كاملة لإدارة الشركات، الأقسام، المستخدمين، المهام، التقارير.
- واجهات Dashboard احترافية، Responsive، مع حركات GSAP.

## 👥 الأدوار
- **SUPER_ADMIN**: إنشاء الشركات، تعيين المدراء، إنشاء مستخدمين، تجهيز بيانات تجريبية كاملة.
- **COMPANY_MANAGER**: إنشاء أقسام، تعيين رؤساء الأقسام، ربط الموظفين بالأقسام.
- **DEPARTMENT_HEAD**: إنشاء المهام، متابعة Kanban، مراجعة تقارير القسم.
- **EMPLOYEE**: عرض المهام، تغيير الحالة، إرسال التقارير.

## 🚀 التشغيل
```bash
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run dev
```

## 🧪 بيانات الدخول التجريبية
> من لوحة Super Admin يمكنك الضغط على "إنشاء البيانات التجريبية" لإعداد كل الحسابات تلقائيًا.

- admin@company.local / Admin@12345
- manager@company.local / Manager@12345
- head@company.local / Head@12345
- employee1@company.local / Employee@12345
- employee2@company.local / Employee2@12345

## 🔌 API
- `POST /api/auth/register`
- `GET/POST/PATCH /api/companies`
- `GET/POST /api/departments`
- `GET/PATCH /api/users`
- `GET/POST/PATCH /api/tasks`
- `GET/POST /api/reports`
- `POST /api/setup/demo`

## 📌 ملاحظات
- التصميم مبني بطريقة قابلة للتوسع الحقيقي (DashboardShell + SectionCard + reusable features).
- جميع العمليات الأساسية مربوطة بصلاحيات الدور على مستوى الصفحة والـ API.
