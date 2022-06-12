const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emotion) => {
  try {
    const dataIXX = await promiseTheaterIXX();
    const dataVGC = await promiseTheaterVGC();
    const data = dataIXX.concat(dataVGC);
    data.map((item) => {
      item.hasil === emotion && (totalEmotion += 1)
      return totalEmotion;
    })
  } catch (err) {
    return err
  }
};

module.exports = {
  promiseOutput,
};
