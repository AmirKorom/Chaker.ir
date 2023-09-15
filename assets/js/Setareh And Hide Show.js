
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
        this.changeXAndHideShowThings = () => {

            let intId = setInterval(() => {

                this.landing++;

                if (this.landing == 1205) {


                    clearInterval(intId);
                    document.getElementById("tickGif").classList.toggle("hidden");

                    document.getElementById("WaitGif").classList.toggle("hidden");

                    document.getElementById("WaitText").classList.toggle("hidden");

                    setTimeout(() => {
                        document.getElementById("WaittingPage").classList.toggle("hidden");

                        document.getElementById("BookPage").classList.toggle("hidden");
                    }, 1200);



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

set.changeXAndHideShowThings();

setInterval(() => {

    set.walk();

}, 256)