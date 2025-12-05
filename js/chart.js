const ctx = document.getElementById("chart");
console.log(exp);
console.log(inc);

//date extractions
let expDates = [];
exp.forEach((el) => {
  expDates.push(el["date"]);
})
console.log(expDates);

let incDates = [];
inc.forEach((el) => {
  incDates.push(el["date"]);
})

console.log(incDates);



//price data extration
//incomes data

let incDataPrices = [];

inc.forEach((el) =>{
  incDataPrices.push(el["price"]);
})
console.log(incDataPrices);

let expDataPrices = [];

exp.forEach((el) =>{
  expDataPrices.push(el["price"]);
})

console.log(expDataPrices);


//months Array
let monthArr = [];
inc.forEach((el) =>{
  monthArr.push(el["month"]);
})

new Chart(ctx, {
    type: "bar",   
    data: {
        labels: monthArr,
        datasets: [
            {
              label: "Income",
              type: "bar",
              data: incDataPrices,
              borderColor: "#008FFB",
              backgroundColor: "#008FFB88",
              yAxisID: "yIncome",
            },
            {
                label: "Cashflow",
                type: "bar",
                data: expDataPrices,
                borderColor: "#00E396",
                backgroundColor: "#00E39688",
                yAxisID: "yCash",
            },
            {
                label: "Revenue",
                type: "line",
                data: expDataPrices,
                borderColor: "#FEB019",
                backgroundColor: "#FEB019",
                fill: false,
                borderWidth: 3,
                yAxisID: "yRevenue",
            }
        ]
    },

    options: {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false
        },

        plugins: {
            title: {
                display: true,
                text: "My economy",
                align: "start",
                padding: 20,
                font: { size: 18 }
            },
            legend: {
                position: "top",
                align: "start"
            }
        },

        scales: {
            yIncome: {
                type: "linear",
                position: "left",
                title: {
                    display: true,
                    text: "Income (thousand crores)",
                    color: "#008FFB"
                },
                ticks: { color: "#008FFB" }
            },

            yCash: {
                type: "linear",
                position: "right",
                title: {
                    display: true,
                    text: "Operating Cashflow (thousand crores)",
                    color: "#00E396"
                },
                ticks: { color: "#00E396" },
                grid: { drawOnChartArea: false }
            },

            yRevenue: {
                type: "linear",
                position: "right",
                title: {
                    display: true,
                    text: "Revenue (thousand crores)",
                    color: "#FEB019"
                },
                ticks: { color: "#FEB019" },
                grid: { drawOnChartArea: false }
            }
        }
    }
});