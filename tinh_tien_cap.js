/**
 * input: nhập loại khách hàng và các thông số khác.
 * process: tính tiền cáp.
 * output: xuất ra tiền cáp.
 */

// làm xuất hiện hoặc biến mất ô số kết nối
function xuatHienSoKetNoi() {
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const doanhNghiepDiv = document.getElementById("doanhNghiepDiv");

  if (loaiKhachHang === "doanhNghiep") {
    doanhNghiepDiv.style.display = "block";
  } else {
    doanhNghiepDiv.style.display = "none";
  }
}
function tinhTienCap() {
  const maKhachHang = document.getElementById("maKhachHang").value;
  const soKenh = document.getElementById("soKenh").value * 1;
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const soKetNoi = document.getElementById("soKetNoi").value * 1;
  let tongTienCap = 0;
  // Trường hợp nhà dân
  if (loaiKhachHang === "nhaDan") {
    tongTienCap = 4.5 + 20.5 + 7.5 * soKenh;
  } else {
    // Trường hợp doanh nghiệp

    // Trường hợp số kết nối nhỏ hơn 10
    if (soKetNoi <= 10) {
      tongTienCap = 15 + 75 + 50 * soKenh;
      // Trường hợp số kết nối lớn hơn 10
    } else {
      tongTienCap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenh;
    }
  }
  // Xuất ra tiền cáp
  document.getElementById(
    "ketQua4"
  ).innerHTML = `Mã khách hàng: ${maKhachHang} <br>  Tiền cáp: $${tongTienCap}`;
}
