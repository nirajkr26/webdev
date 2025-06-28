
function  searchBackend(){
    console.log("request received");
}

let currentClock;

function debouncedSearchBackend(){  
    clearTimeout(currentClock);
    currentClock=setTimeout(searchBackend,30);
}

debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()
debouncedSearchBackend()