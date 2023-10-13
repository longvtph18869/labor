function mostViewSort(data) {
    let initial = 0;
    let secondFirst = Math.floor(data.length / 2) - 1;
    let results = [];
    data.forEach((item, i) => {
        if (i % 2) {
            secondFirst += 1;
            results.push({...data[secondFirst], id: secondFirst + 1});
        } else {
            initial += 1;
            results.push({...data[initial], id: initial});
        }
    });
    return results;
}
function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
export {
    mostViewSort,
    formatDate
};