let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (const color in statistics){
    if(`${color}`[0]=='r' || `${statistics[color]}`%2!=0){
        console.log(`${color}: ${statistics[color]}`);
    }
}
