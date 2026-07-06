# BasisToolkit — website

Static website (Astro) for BasisToolkit: landing page for the SAP Logon Transfer
tool + a guides/blog section. Fast, secure, free to host.

## Chạy thử trên máy anh

Cần Node.js 18+ (tải ở nodejs.org).

```
npm install
npm run dev
```
Mở http://localhost:4321 để xem. Sửa file trong `src/` là trang tự cập nhật.

## Build ra site tĩnh

```
npm run build
```
Kết quả nằm trong thư mục `dist/` — đây là toàn bộ site tĩnh để đưa lên hosting.

## Đưa lên mạng miễn phí (khuyến nghị: Cloudflare Pages)

1. Đẩy thư mục này lên một repo GitHub.
2. Vào Cloudflare Pages → Create project → nối repo.
3. Build command: `npm run build` · Output directory: `dist`
4. Cloudflare tự build và cho anh một tên miền miễn phí (yourname.pages.dev),
   hoặc trỏ tên miền riêng basistoolkit.com vào.

(GitHub Pages hoặc Netlify cũng làm được tương tự, cùng cấu hình.)

## Cấu trúc

```
src/
  layouts/
    Base.astro      — khung chung: header, footer, SEO meta
    Guide.astro     — khung cho từng bài hướng dẫn
  pages/
    index.astro     — trang chủ (hero, tính năng, how-it-works, guides, CTA)
    download.astro  — trang tải + hướng dẫn tự build
    about.astro     — giới thiệu tác giả
    guides/
      index.astro   — danh sách bài viết
      *.astro       — từng bài hướng dẫn
    sitemap.xml.js  — sitemap cho SEO
  styles/global.css — design tokens (màu, font, layout)
public/
  favicon.svg, robots.txt
```

## Thêm bài viết mới

Tạo file mới trong `src/pages/guides/ten-bai-viet.astro` theo mẫu:

```astro
---
import Guide from '../../layouts/Guide.astro';
---
<Guide
  title="Tiêu đề bài"
  description="Mô tả ngắn cho SEO"
  path="/guides/ten-bai-viet/"
  tag="How-to"
  updated="March 2026"
>
  <p>Nội dung bài viết…</p>
  <h2>Mục</h2>
  ...
</Guide>
```

Rồi thêm bài đó vào danh sách trong `src/pages/guides/index.astro` và phần
"Guides" ở `src/pages/index.astro`. Anh có thể nhờ tôi soạn nội dung mỗi bài.

## Việc cần làm trước khi go-live

1. **Nút Download**: hiện đang là placeholder. Mở `src/pages/download.astro`, tìm
   đoạn `[data-download]` ở cuối và trỏ tới link tải thật (khuyến nghị: GitHub
   Releases — vừa lưu file .exe, vừa tăng uy tín, vừa có link tải ổn định).
2. **Tên miền**: đăng ký basistoolkit.com (hoặc tên khác), trỏ vào Cloudflare Pages.
3. **AdSense**: sau khi site có nội dung (nên có ít nhất 8–10 bài chất lượng), đăng
   ký AdSense và chèn mã vào `src/layouts/Base.astro` trong phần `<head>`.
4. **Đa ngôn ngữ**: hiện site tiếng Anh. Khi muốn thêm Việt/Nhật/Đức/Trung, tạo
   thư mục `src/pages/vi/`, `src/pages/ja/`... và thêm thẻ hreflang. Nhờ tôi khi cần.

## Lưu ý pháp lý

Footer và trang About đã ghi rõ site độc lập, không liên kết với SAP SE, và "SAP"
là nhãn hiệu của SAP SE — giữ nguyên các dòng này để tránh rủi ro nhãn hiệu.
