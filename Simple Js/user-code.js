title("The Great Icecream Survey")
subheader("2022")

let flavours = ["Vanilla, Chocolate, Mint"]

let favourite = radio("Which icecream is your favourite?", flavours)

if (favourite == "Vanilla") {
    markdown("why")
}