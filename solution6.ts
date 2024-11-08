{
    //


    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (profile: Profile, updates: 
        Partial<Profile>): Profile => {
        return { ...profile, ...updates };
    }

    const myProfile: Profile = { name: "Akib", age: 25, email: "haloZzen@ph.com" };

    const result = updateProfile(myProfile, { name: "sakib" });

    console.log(result);




    //
}