//given an array of meeting time intervals where intervals[i] = start[i], end[i], return the minimum number of rooms required.


function meetingRooms(intervals) {
    let rooms = [];

    intervals.sort((a, b) => a - b);
    for(let element of intervals) {
        let hasRoom = false;
        // loop through the rooms to check if there is any available
        for(let room of rooms) {
            if(room[room.length - 1] <= element[0]) {
                room.push(element[1]);
                hasRoom = true;
                break;
            }
        }
        if(!hasRoom) {
            rooms.push([]);
            rooms[rooms.length - 1].push(element[1]);
        }
    }
    return rooms.length;
};

console.log(meetingRooms([[0, 30], [5, 10], [15, 20]]))
console.log(meetingRooms([7, 10], [2, 4]))


