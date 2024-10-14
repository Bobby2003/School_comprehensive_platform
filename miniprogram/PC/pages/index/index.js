// PC/pages/index/index.js
Page({
  data: {
    timeTable: []
  },

  onLoad() {
    this.generateTimeTable();
  },

  generateTimeTable() {
    const rows = 22; // 行数
    const columns = 13; // 列数
    const timePoints = [];

    for (let rowIndex = 8; rowIndex < rows; rowIndex++) {
      const row = [];
      const hour = String(rowIndex).padStart(2, '0'); // 获取小时

      row.push(hour); // 在第一列添加小时

      for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        const minute = String(columnIndex * 5).padStart(2, '0'); // 每列5分钟
        row.push(minute); // 添加分钟到行
      }
      timePoints.push(row);
    }

    console.log(timePoints);
    this.setData({ timeTable: timePoints });
  },

  handleCellClick(event) {
    const { rowIndex, columnIndex } = event.currentTarget.dataset;
    const minute = this.data.timeTable[rowIndex][columnIndex];
    console.log(`Clicked on: Hour ${this.data.timeTable[rowIndex][0]}, Minute ${minute}`);
    // 在这里可以添加更多的逻辑，例如导航或弹出框等
  }
});
