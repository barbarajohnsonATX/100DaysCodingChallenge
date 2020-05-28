function domainType(domains: string[]): string[] {
    const dot = {
        'com': 'commercial',
        'net': 'nework',
        'info': 'information',
        'org': 'organization'
    }

    let types = [];

    console.log(domains);
    for(let item of domains) {
        let domainArray = item.split('.');
     //    console.log(domainArray);
         let ext = domainArray[domainArray.length - 1];
     //    console.log(ext)
         types.push(dot[ext])
    }

   return types;

}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));