const students = [ /*Yes I'll find another way to store the data*/
    { firstName: "Mackenzie", lastName: "Fisher", badgeId: "14506097716" },
    { firstName: "Biruk", lastName: "Sisay", badgeId: "558088/5725" },
    { firstName: "Grayson", lastName: "Heskett", badgeId: "14508087101" },
    { firstName: "Ryan", lastName: "Dermesropian", badgeId: "12909873000" },
    { firstName: "Sathiya", lastName: "Desai", badgeId: "14507034333" },
    { firstName: "Freyja", lastName: "Dodson", badgeId: "86600305611" },
    { firstName: "Brina", lastName: "Mckee", badgeId: "86600346163" },
    { firstName: "Olivia", lastName: "Hyde", badgeId: "86600347668" },
    { firstName: "Teagan", lastName: "Haefner", badgeId: "14510047452" },
    { firstName: "Thomas", lastName: "Viggiani", badgeId: "14507009369" },
    { firstName: "Emma", lastName: "Hutchinson", badgeId: "14508073532" },
    { firstName: "Matthew", lastName: "Segel", badgeId: "14508069588" },
    { firstName: "Leah", lastName: "Percey", badgeId: "14509042458" },
    { firstName: "Chiara", lastName: "Bognetti", badgeId: "35910971702" },
    { firstName: "Sidney", lastName: "Schmidt", badgeId: "86600314539" },
    { firstName: "Rain (Tiana)", lastName: "Lewis", badgeId: "14510014396" },
    { firstName: "Ziah", lastName: "King", badgeId: "12410018414" },
    { firstName: "Hasaan", lastName: "White", badgeId: "86600333248" },
    { firstName: "Cannon", lastName: "Fountain", badgeId: "86600321749" },
    { firstName: "Piper", lastName: "Phillips", badgeId: "14510032212" },
    { firstName: "Hikaru", lastName: "Kurahashi", badgeId: "86600348542" },
    { firstName: "Isabella", lastName: "Villasana", badgeId: "14509059279" },
    { firstName: "Ewan", lastName: "Salas", badgeId: "10910075948" },
    { firstName: "Khalid", lastName: "Eltayeb", badgeId: "14509054548" },
    { firstName: "Noor", lastName: "Fnu", badgeId: "45808884557" },
    { firstName: "Siara", lastName: "Abubakar-Shidi", badgeId: "12910885768" },
    { firstName: "Amin", lastName: "Al Naqshbandi", badgeId: "45810884928" },
    { firstName: "Sergio", lastName: "Almada", badgeId: "14508052878" },
    { firstName: "Evan", lastName: "Arsenault", badgeId: "11509885448" },
    { firstName: "Owen", lastName: "Avey", badgeId: "11210875743" },
    { firstName: "Gracie", lastName: "Barillas", badgeId: "14508011070" },
    { firstName: "Sebastian", lastName: "Carreno", badgeId: "86600301978" },
    { firstName: "Cooper", lastName: "Cho", badgeId: "14509076282" },
    { firstName: "Shannon", lastName: "Cooling", badgeId: "35808897105" },
    { firstName: "Lucas", lastName: "Correa", badgeId: "75808884508" },
    { firstName: "Shalav", lastName: "Devkota", badgeId: "1061088555" },
    { firstName: "Brody", lastName: "Enzmann", badgeId: "86600336974" },
    { firstName: "Noah", lastName: "Flapper", badgeId: "86600349911" },
    { firstName: "Mursal", lastName: "Hassanzada", badgeId: "86600328949" },
    { firstName: "Janeek", lastName: "Jones", badgeId: null },
    { firstName: "Isaac", lastName: "Karzai", badgeId: "14509082941" },
    { firstName: "Skylar", lastName: "LaBenz", badgeId: "14507034466" },
    { firstName: "Megan", lastName: "MacAleese", badgeId: "14509086370" },
    { firstName: "Dhanush", lastName: "Mattaparthi", badgeId: "45810971690" },
    { firstName: "Ashraf", lastName: "Nasser", badgeId: null },
    { firstName: "Isabella", lastName: "Simon", badgeId: "14510044960" },
    { firstName: "Sakeith", lastName: "Nedunuri", badgeId: "45809884839" },
    { firstName: "Sanyukta", lastName: "Pagar", badgeId: "86600347232" },
    { firstName: "Alexandra", lastName: "Archer", badgeId: "86600325472" },
    { firstName: "Jacob", lastName: "Snograss", badgeId: "14507075779" },
    { firstName: "Noah", lastName: "Sullivan", badgeId: "14504017367" },
    { firstName: "Aadi", lastName: "Patel", badgeId: "14509019794" },
    { firstName: "Neel", lastName: "Patel", badgeId: null },
    { firstName: "Gabby", lastName: "Addotey", badgeId: "14507019574" },
    { firstName: "Ryan", lastName: "Brindley", badgeId: "14508022856" },
    { firstName: "Brady", lastName: "Bryant", badgeId: "14507046775" },
    { firstName: "Virginia", lastName: "Carter", badgeId: "14508013581" },
    { firstName: "Delorina", lastName: "Daniel", badgeId: "25807884456" },
    { firstName: "Gen", lastName: "DesRosiers", badgeId: "86600307164" },
    { firstName: "Landon", lastName: "Estey", badgeId: "12809857682" },
    { firstName: "Tyler", lastName: "Gelrud", badgeId: "14509018169" },
    { firstName: "Honey", lastName: "Henok", badgeId: "14509080538" },
    { firstName: "Anna", lastName: "Helper", badgeId: "14506077745" },
    { firstName: "Mattt", lastName: "Howerton", badgeId: "14507055014" },
    { firstName: "Keith", lastName: "Logan", badgeId: null },
    { firstName: "Jose", lastName: "Midence", badgeId: "75807818593" },
    { firstName: "Madison", lastName: "Mckinney", badgeId: "86600338067" },
    { firstName: "Matthew", lastName: "Nystrom", badgeId: "14508084732" },
    { firstName: "Genna", lastName: "Sessoms", badgeId: "86600336886" },
    { firstName: "Isbella", lastName: "Skwarok", badgeId: "86600315753" },
    { firstName: "Gina", lastName: "Yang", badgeId: "14207883635" },
    { firstName: "Victor", lastName: "", badgeId: "14508002719" },
    { firstName: "Levi", lastName: "", badgeId: "14510043598" },
    { firstName: "Landon", lastName: "Hampton", badgeId: "14510094738" },
    { firstName: "Hazel", lastName: "", badgeId: "86600313396" },
    { firstName: "Manny", lastName: "", badgeId: "14509089883" },
    { firstName: "Nikhila", lastName: "", badgeId: "45810873055" },
    { firstName: "Farrah", lastName: "", badgeId: "15610006000" },
    { firstName: "London", lastName: "Hammond", badgeId: "86600318846" },
    { firstName: "Neel", lastName: "", badgeId: "14510033329" },
    { firstName: "Gabby", lastName: "", badgeId: "14508015274" },
    { firstName: "Angie", lastName: "", badgeId: "86600327434" },
    { firstName: "Kayla", lastName: "", badgeId: "14509060043" },
    { firstName: "Henry", lastName: "", badgeId: "11520633959" },
    { firstName: "Aviana", lastName: "", badgeId: "14509038073" },
    { firstName: "Kyle", lastName: "", badgeId: "10908857599" },
    { firstName: "Corbin", lastName: "", badgeId: "12010000827" },
    { firstName: "Cole", lastName: "Price", badgeId: "14509002486" }
];

function removeSpaces(text) {
    return text.replace(/\s+/g, '');
}


class checkOutItem {
    constructor(id, equipment, checkoutDate, time) {
        id = removeSpaces(id) + "";
        this.studentID = id;
        this.equipment = equipment;
        this.checkoutDate = checkoutDate;
        this.time = this.convertTo12HourFormat(time);
        this.firstName = this.returnName(true, id);
        this.lastName = this.returnName(false, id);
    }

    convertTo12HourFormat(time) { //CHATGPT code to format time
        let [hours, minutes] = time.split(":").map(num => parseInt(num, 10));
        
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12; // Convert to 12-hour format
        hours = hours ? hours : 12; // Handle 0 hour as 12
        hours = hours < 10 ? '0' + hours : hours; //add leading zero to hours
        minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if needed
        
        return `${hours}:${minutes} ${ampm}`;
    }

    setFirstName(f) {
        this.firstName = f;
    }
    
    setLastName(n) {
         this.lastName = n;
    }
    
    setEquipment(e) {
         this.equipment = e;
    }
    
    setCheckoutDate(d) {
         this.checkoutDate = d;
    }
    
    setTime(t) {
        this.time = t;
    }


    getFirstName() {
        return this.firstName;
    }
    
    getLastName() {
        return this.lastName;
    }
    
    getEquipment() {
        return this.equipment;
    }
    
    getCheckoutDate() {
        return this.checkoutDate;
    }
    
    getTime() {
        return this.time;
    }

    returnName(isFirstName, id) {
        const findVal = students.find(function(val) {
            return val.badgeId === id;
        });
        if (!findVal) {return ""};
        if (isFirstName === true) {
            return findVal.firstName;
        } else {
            return findVal.lastName;
        }
    }
}
class Subject { /*Even I don't know what this does*/
    constructor() {
        this.handlers = [];
    }
    subscribe(fn) {
        this.handlers.push(fn);
    }
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(function(elem) {
            if(elem !== fn) {
                return elem;
            }
        });
    }
    publish(msg, someobj) {
        let scope = someobj || window;
        for(let fn of this.handlers) {
            fn(scope, msg);
        }
    }
}
class checkOutList extends Subject {
    constructor() {
        super();
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(this.items);
        this.publish('changedItems', this);
    }

    delete(index) {
        this.items.splice(index, 1);
    }
    getItems() {
        return this.items;
    }
}