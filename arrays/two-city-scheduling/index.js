function twoCitySchedCost(costs) {
    //sort the array in the descending order
    let cost = costs.sort((a, b) => (b[0] - b[1]) - (a[0] - a[1]));
    const minCost = 0;
    //first loop for checking the optimal cost for travelling to city B
    for(let i = 0; i < cost.length / 2; i++) {
        minCost += cost[i][1];
    }
    //second loop for checking the optimal cost for travelling to city A
    for(let i = cost.length / 2; i < cost.length; i++) {
        minCost += cost[i][0]
    }
    return minCost;
}

twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ])