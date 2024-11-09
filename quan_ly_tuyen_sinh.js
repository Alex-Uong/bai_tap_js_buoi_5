/**
 * input: nhận điểm chuẩn, điểm thi 3 môn, khu vực, đối tượng.
 * process:
 * - tính điểm tổng 3 môn, cộng điểm đối tượng và vùng nếu có.
 * - so sánh với điểm chuẩn và kết hợp điều kiện không có môn nào bằng 0 để kiểm tra kết qủa.
 * output: Xuất tổng điểm và kết quả đậu hay rớt.
 */

function tinhKetQuaThi() {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const diemMon1 = document.getElementById("mon1").value * 1;
  const diemMon2 = document.getElementById("mon2").value * 1;
  const diemMon3 = document.getElementById("mon3").value * 1;
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value;
  let ketQua = "";
  let diemDoiTuong = 0;
  let diemKhuVuc = 0;
  let tongDiem = 0;

  // Xét xem có môn nào bằng không không
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    ketQua = "Bạn đã rớt, do có môn 0 điểm";

    // Nếu có môn bằng không thì xuất luôn kết quả
    document.getElementById("ketQua").innerHTML = ketQua;

    // Nếu không bị liệt thì tính tiếp
  } else {
    // Tính tổng điểm 3 môn và các điểm cộng
    // Tính điểm khu vực
    if (khuVuc == "A") {
      diemKhuVuc = 2;
    } else if (khuVuc == "B") {
      diemKhuVuc = 1;
    } else if (khuVuc == "C") {
      diemKhuVuc = 0.5;
    } else {
      diemKhuVuc = 0;
    }
    // Tính điểm đối tượng
    if (doiTuong == 1) {
      diemDoiTuong = 2.5;
    } else if (doiTuong == 2) {
      diemDoiTuong = 1.5;
    } else if (doiTuong == 3) {
      diemDoiTuong = 1;
    } else {
      diemDoiTuong = 0;
    }

    // Tính tổng điểm
    tongDiem = diemMon1 + diemMon2 + diemMon3 + diemDoiTuong + diemKhuVuc;

    // So sánh với điểm chuẩn để biết kết quả
    if (tongDiem >= diemChuan) {
      ketQua = "Chức mừng, bạn đã đậu";
    } else {
      ketQua = "Rớt";
    }

    // Xuất điểm và kết quả đấu hay rớt
    document.getElementById(
      "ketQua"
    ).innerHTML = `Tổng điểm: ${tongDiem} <br> Kết quả: ${ketQua}`;
  }
}
