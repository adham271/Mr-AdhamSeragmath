# 🎓 Mr. Adham Serag - Mathematics Educator Website

موقع تعليمي ثنائي اللغة (عربي/إنجليزي) للأستاذ أدهم سراج لتعليم الرياضيات للمرحلة الثانوية.

## 🚀 طريقة رفع الموقع على Netlify (الأسهل)

### الخطوة 1: ارفع الكود على GitHub

1. اعمل حساب على [github.com](https://github.com)
2. اضغط **New Repository** (الزرار الأخضر)
3. الاسم: `mr-adham-serag`
4. اختار **Public**
5. اضغط **Create Repository**
6. اضغط على **"uploading an existing file"**
7. اسحب **كل ملفات المشروع** (ماعدا فولدر `node_modules` و `dist` لو موجودين)
8. اضغط **Commit changes**

### الخطوة 2: اربط Netlify بـ GitHub

1. روح على [netlify.com](https://netlify.com) واعمل حساب (سجّل بـ GitHub)
2. اضغط **Add new site** → **Import an existing project**
3. اختار **Deploy with GitHub**
4. اعمل **Authorize** لـ Netlify
5. اختار الـ Repository: `mr-adham-serag`
6. الإعدادات هتكون جاهزة أوتوماتيك (من ملف `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. اضغط **Deploy site** 🚀
8. استنى 1-2 دقيقة... وخلاص الموقع شغال!

### الخطوة 3: غيّر اسم الموقع

1. افتح الموقع في Netlify
2. **Site configuration** → **Change site name**
3. اكتب: `mr-adham-serag`
4. الموقع هيبقى: `https://mr-adham-serag.netlify.app`

---

## 🔄 لما تعدّل الموقع

أي تعديل على GitHub، Netlify هيرفعه أوتوماتيك خلال دقيقتين! ✨

---

## 🌐 ربط دومين خاص (اختياري)

1. اشتري دومين من [Namecheap](https://namecheap.com) (~10$/سنة)
2. في Netlify: **Domain management** → **Add a domain**
3. اتبع التعليمات لربط الـ Nameservers

---

## 💻 التشغيل المحلي (للتطوير)

```bash
# تثبيت المكتبات
npm install

# تشغيل الموقع محلياً
npm run dev

# بناء الموقع للنشر
npm run build
```

---

## 📞 معلومات التواصل

- **WhatsApp:** 01223983153
- **Facebook:** [MrAdhamSerag](https://www.facebook.com/MrAdhamSerag)
- **YouTube:** [@mr.adhamserag](https://www.youtube.com/@mr.adhamserag)

---

## 🛠️ التقنيات المستخدمة

- ⚡ Vite
- ⚛️ React 18
- 🎨 Tailwind CSS
- 📘 TypeScript
- 🌐 Bilingual Support (AR/EN)
