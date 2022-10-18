const fs = require('fs');

class ConfigSpecification {

    constructor(filePath) {

        this.jsonConfig = require(filePath);
        this.filePath   = filePath;
    }
        
    addNewFriend() {

        let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
        this.jsonConfig.numberOfFriends =  ++numericalRepresentation;
        if(this.jsonConfig.AcountType == "Normal",this.jsonConfig.numberOfFriends < 150) {
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/normal/a4dRctdWfn/friends, (`${this.jsonConfig.numberOfFriends}1`));
        }
        else if(this.jsonConfig.AcountType == "VIP") {
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/VIP/Karolinaa/friends, (`${this.jsonConfig.numberOfFriends}2`));
        }
        else if(this.jsonConfig.AcountType == "Restricted",this.this.jsonConfig.numberOfFriends < 50){ 
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/restricted/Ivan/friends, (`${this.jsonConfig.numberOfFriends}1`));
        }
        else{
            return "your account is unknown type"
        }
    }

    removeExistingFriend() {

        let numericalRepresentation   = +this.jsonConfig.numberOfFriends;
        this.jsonConfig.numberOfFriends =  --numericalRepresentation;
        do  {      
            if(this.jsonConfig.AcountType == "Normal") {
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/normal/a4dRctdWfn/friends, (this.jsonConfig.numberOfFriends))
            }
            else if(this.jsonConfig.AcountType == "VIP") {
                fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
                fs.writeFileSync({__dirname}/test_scenarious/VIP/Karolinaa/friends, (this.jsonConfig.numberOfFriends));
            }
            else if(this.jsonConfig.AcountType == "Restricted"){ 
                fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
                fs.writeFileSync({__dirname}/test_scenarious/restricted/Ivan/friends, (this.jsonConfig.numberOfFriends));
            }
        }
        while (this.jsonConfig.AcountType == "Restricted","VIP","Normal", this.jsonConfig.numberOfFriends < 1); {
            throw "You can not decrease the number of friends below 0"
            }
        
    }

    getAllFriends() {

        if(this.jsonConfig.numberOfFriends == 0) {
            return `You do not have any friends`;
        }

        if(this.jsonConfig.numberOfFriends == 1) {
            return `You have ${this.jsonConfig.numberOfFriends} friend`;
        }

        return `You have ${this.jsonConfig.numberOfFriends} friends`;
    }

    addNewPhoto() {

        let numericalRepresentation   = +this.jsonConfig.numberOfPhotos;
        this.jsonConfig.numberOfPhotos  =  ++numericalRepresentation;
        if(this.jsonConfig.AcountType == "Normal",this.jsonConfig.numberOfPhotos < "150" ) { 
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/normal/a4dRctdWfn/photos, (`${this.jsonConfig.numberOfPhotos}1`))
        }
        else if(this.jsonConfig.AcountType == "VIP") {
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/VIP/Karolinaa/photos, (`${this.jsonConfig.numberOfPhotos}1`));
        }
        else if(this.jsonConfig.AcountType == "Restricted"){
            return "You have no permision to do that";
        }
        else{
            return "your account is unknown type";
        }
        
    }

    removeExistingPhoto() {

        let numericalRepresentation   = +this.jsonConfig.numberOfPhotos;
        this.jsonConfig.numberOfPhotos  =  --numericalRepresentation;
        do  {      
            if(this.jsonConfig.AcountType == "Normal") {
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/normal/a4dRctdWfn/photos, (this.jsonConfig.numberOfPhotos))
            }
            else if(this.jsonConfig.AcountType == "VIP") {
                fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
                fs.writeFileSync({__dirname}/test_scenarious/VIP/Karolinaa/photos, (this.jsonConfig.numberOfPhotos));
            }
        }
        while (this.jsonConfig.AcountType == "VIP","Normal", this.jsonConfig.numberOfPhotos < 1); {
            throw "You can not decrease the number of photos below 0"
            }
        }

    getAllPhotos() {

        if(this.jsonConfig.numberOfPhotos == 0) {
            return `You have not uploaded any photos yet`;
        }

        if(this.jsonConfig.numberOfPhotos == 1) {
            return `You have uploaded ${this.jsonConfig.numberOfPhotos} photo`;
        }

        return `You have uploaded ${this.jsonConfig.numberOfPhotos} photos`;
    }

    addNewVideo() {

        let numericalRepresentation   = +this.jsonConfig.numberOfVideos;
        this.jsonConfig.numberOfVideos  =  ++numericalRepresentation;
        if(this.jsonConfig.AcountType == "Normal",this.jsonConfig.numberOfVideos < "50") { 
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/normal/a4dRctdWfn/videos, (`${this.jsonConfig.numberOfVideos}1`))
        }
        else if(this.jsonConfig.AcountType == "VIP") {
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/VIP/Karolinaa/videos, (`${this.jsonConfig.numberOfVideos}1`));
        }
        else if(this.jsonConfig.AcountType == "Restricted"){
            return "You have no permision to do that";
        }
        else{
            return "your account is unknown type";
        }
    }

    removeExistingVideo() {
        
        let numericalRepresentation   = +this.jsonConfig.numberOfVideos;
        this.jsonConfig.numberOfVideos  =  --numericalRepresentation;
        do  {      
            if(this.jsonConfig.AcountType == "Normal") {
            fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
            fs.writeFileSync({__dirname}/test_scenarious/normal/a4dRctdWfn/videos, (this.jsonConfig.numberOfVideos))
            }
            else if(this.jsonConfig.AcountType == "VIP") {
                fs.writeFileSync(this.filePath, JSON.stringify(this.jsonConfig));
                fs.writeFileSync({__dirname}/test_scenarious/VIP/Karolinaa/videos, (this.jsonConfig.numberOfVideos));
            }
        }
        while (this.jsonConfig.AcountType == "VIP","Normal", this.jsonConfig.numberOfVideos < 1); {
            throw "You can not decrease the number of Videos below 0"
            }
    }

    getAllVideos() {

        if(this.jsonConfig.numberOfVideos == 0) {
            return `You have not uploaded any videos yet`;
        }

        if(this.jsonConfig.numberOfVideos == 1) {
            return `You have uploaded ${this.jsonConfig.numberOfVideos} video`;
        }

        return `You have uploaded ${this.jsonConfig.numberOfVideos} videos`;
    }
}

const initConfig = (configFile) => {
    return new ConfigSpecification(configFile);
};

module.exports = {
    initConfig
};

