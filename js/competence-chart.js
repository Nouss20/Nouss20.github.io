const ctx = document.getElementById('myChart').getContext('2d'); /* selection du canva + obtention du dessin en 2D */
    const labels = ['Javascript', ' HTML', 'CSS', 'Language R', 'Python', 'Pharo']
    const data = {  /* regroupement des labels et des valeurs des barres */
        labels: labels,
        datasets: [{
            label: 'Niveau de compétence en language informatique en pourcentage',
            data: [30, 40, 40, 55, 60, 55],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', /* niveau de transparence à 20% */
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
    ],
    borderWidth:1 /* bordure fine */
    }]

};

const config = {
    type: 'bar',
    data,
    options:{
       indexAxis: 'y', /* orientation de la barre en horizontale */
        }
};
new Chart(ctx, config); /* création du graphique avec les configurations que l'on a fournit */