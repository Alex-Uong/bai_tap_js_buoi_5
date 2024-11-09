/**
 * input: nhận tên và thu nhập năm và số người phụ thuộc.
 * process: tính thuế thu nhập cá nhân.
 * output: xuất ra họ tên và tiền thuế.
 */

function tinhThueThuNhap() {
  // Khai báo biến
  const hoTen = document.getElementById("hoTen2").value;
  const thuNhap = document.getElementById("thuNhap").value * 1;
  const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  let thuNhapChiuThue = 0;
  let tienThue = 0;

  // Tính thu nhập chịu thuế
  thuNhapChiuThue = thuNhap - 4000000 - 1600000 * soNguoiPhuThuoc;

  // Tính tiền thuế
  if (thuNhapChiuThue < 0) {
    tienThue = 0;
  } else if (thuNhapChiuThue <= 60000000) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    tienThue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    tienThue =
      60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    tienThue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      (thuNhapChiuThue - 210000000) * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    tienThue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      (thuNhapChiuThue - 384000000) * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    tienThue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      252000000 * 0.25 +
      (thuNhapChiuThue - 624000000) * 0.3;
  } else {
    tienThue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      252000000 * 0.25 +
      384000000 * 0.3 +
      (thuNhapChiuThue - 960000000) * 0.35;
  }

  // Xuất ra họ tên và tiền thuế
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Họ và tên: ${hoTen} <br> Tiền thuế: ${tienThue.toLocaleString()} VND`;
}
