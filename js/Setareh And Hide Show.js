
class humen {
    constructor() {
        this.leg;
        this.hand;
        this.arm;
        this.eye;
        this.fingher;
        this.shirt;
        this.pnats;
    }
}
class girl extends humen {

    constructor() {

        super(new humen());
        this.name = "setareh";
        this.age = 13;
        this.heigh = 10;
        this.landing = 0;
        this.position = 2;
        this.changeX = () => {

            let intId = setInterval(() => {

                this.landing++;

                if (this.landing == 1205) {

                    clearInterval(intId);
                }

                setareh.style.transform = `translate3d(${this.landing}px,0,0)`;

            }, 24)


        }

        this.ChangePositions = setInterval(() => {

            this.position++;
            if (this.position == 10) {
                this.position = 2;
            }
            if (this.landing == 1205) {
                this.position = 1;
            }
        }, 256)

        this.walk = () => {

            document.getElementById("setareh").setAttribute("src", `../images/${this.position}.jpg`);
        }
    }
}
var set = new girl();

set.changeX();

setInterval(() => {
    set.walk();
}, 256)

const tickGit = document.querySelector(".tickGit");

const WaittingPage = document.querySelector(".WaittingPage");

const WaitText = document.querySelector(".WaitText");

const WaitGit = document.querySelector(".WaitGit");

if (set.landing == 1205) {
    var promise = new Promise(function (resolve, reject) {


        tickGit.classList.toggle("hidden");

        WaitGit.classList.toggle("hidden");

        WaitText.classList.toggle("hidden");
        resolve();

    });

    promise.then(
        setTimeout(() => {

            WaittingPage.classList.toggle("hidden");



        }, 1500)
}
)
