const { Schema, model, Types } = require('mongoose');

const ProductStatSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
  },
  { timestamps: true }
);

const ProductStat = model('ProductStat', ProductStatSchema);

module.exports = ProductStat;
