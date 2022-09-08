function Stuff({myStuff, myPets}) {
    console.log(myStuff);
    console.log(myPets);
    return (
        <div className="test">
            <h1>{myPets[0]} is the best</h1>
            <h2>{myStuff[0]}</h2>
        </div>
    )
}

export default Stuff;