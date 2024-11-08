{

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {

        return obj[key];
    }

    const person = {
        name: "Alice",
        age: 30
    };

    const result = getPropertyValue(person, "name")
    console.log(result);
}
