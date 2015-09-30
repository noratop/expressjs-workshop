AddressBook.SUB_ENTRY_TYPES = ['home', 'work', 'other'];
AddressBook.CURRENT_ID = 0;

function AddressBook() {
    this.entries = {};
}

AddressBook.prototype = {
    addEntry: function(entry) {
        var id = AddressBook.CURRENT_ID;
        AddressBook.CURRENT_ID++;
        entry.id = id;
        this.entries[id] = entry;
    }
}

function Entry(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = {}
}


Entry.prototype = {
    setEmail: function(emailType, email) {
        this.emails[emailType] = email;
    }
}

function Email(type, emailAddress) {
    this.type = type;
    this.emailAddress = emailAddress;
}



module.exports = {
    AddressBook: AddressBook,
    Entry: Entry,
    Email: Email
};