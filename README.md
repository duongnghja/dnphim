# 🎬 DNPhim – Ứng dụng Xem Phim với Next.js

**DNPhim** là một ứng dụng web xem phim hiện đại, được xây dựng với Next.js, Tailwind CSS và TypeScript. Ứng dụng cung cấp trải nghiệm người dùng mượt mà, hỗ trợ xem phim trực tuyến với giao diện thân thiện và tối ưu hóa cho mọi thiết bị.

## 🚀 Demo

🔗 [Truy cập ứng dụng tại đây](https://DNPhim.vercel.app/)

## 🛠️ Công nghệ sử dụng

- **[Next.js 15](https://nextjs.org/)** – Framework React mạnh mẽ với khả năng server-side rendering (SSR) và static site generation (SSG).
- **[React 19](https://react.dev/)** – Thư viện xây dựng giao diện người dùng linh hoạt, mạnh mẽ.
- **[Tailwind CSS 4](https://tailwindcss.com/)** – CSS utility-first giúp xây dựng giao diện đẹp và nhanh chóng.
- **[Chakra UI](https://chakra-ui.com/)** – Bộ giao diện React thân thiện, dễ dùng, responsive.
- **[Redux Toolkit](https://redux-toolkit.js.org/)** + **[React Redux](https://react-redux.js.org/)** – Quản lý trạng thái ứng dụng hiệu quả, hiện đại.
- **[NextAuth.js](https://next-auth.js.org/)** – Hệ thống xác thực đa phương thức (Google, GitHub, Email…).
- **[Socket.IO Client](https://socket.io/)** – Giao tiếp thời gian thực giữa client và server.
- **[Swiper.js](https://swiperjs.com/)** & **[Video.js](https://videojs.com/)** – Trình phát video và giao diện trượt hiện đại.
- **[React Hook Form](https://react-hook-form.com/)** – Quản lý form hiệu quả với hiệu suất cao.

## 📦 Cài đặt và chạy dự án

### 1. Clone repository

```bash
git clone https://github.com/phohoccode/DNPhim.git
cd DNPhim/client
```

### 2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### 3. Cấu hình biến môi trường

Tạo tệp `.env` và thêm các biến sau:

```env
NEXT_PUBLIC_BACKEND_URL="http://localhost:8080"
NEXT_PUBLIC_API_URL="https://phimapi.com"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXTAUTH_SECRET="phohoccode"
NEXTAUTH_JWT_SECRET="phohoccode"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
ENV="development"
NEXT_PUBLIC_CLOUDINARY_PRESET=""
NEXT_PUBLIC_CLOUDINARY_NAME=""
NEXT_PUBLIC_API_THEMOVIEDB_KEY=""
NEXT_PUBLIC_API_THEMOVIEDB_URL="https://api.themoviedb.org/3"
NEXT_PUBLIC_API_THEMOVIEDB_IMAGE_URL="https://image.tmdb.org/t/p/w500"
```

### 4. Chạy ứng dụng

```bash
npm run dev
# hoặc
yarn dev
```

Truy cập [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## 🚀 Triển khai trên Vercel

1. Tạo tài khoản tại [Vercel](https://vercel.com/).
2. Kết nối repository GitHub của bạn.
3. Thiết lập biến môi trường trong phần Settings.
4. Nhấn "Deploy" để triển khai ứng dụng.

---

