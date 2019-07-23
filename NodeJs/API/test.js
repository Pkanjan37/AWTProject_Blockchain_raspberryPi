const api = require('./api');

const test = async () => {
  try {
    const contract = await api.deploy();
    const projectId = await api.createProject(contract, api.getDeployerAccount(), 'testproject','description',400,'');
    console.log(projectId);
    console.log(api.getFundingStatus(contract, projectId));
    await Promise.all(api.getAccounts().map(
      account => api.invest(contract, account, projectId, 10002000)
    ));
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(api.getFundingStatus(contract, projectId));
		console.log("<<<<<<<<<<<<<<<<<<<<");
    console.log(api.eth.getBalance(contract).toString());
    api.logBalances();
    await(api.refund(contract, projectId));
    console.log(api.getFundingStatus(contract, projectId));
    console.log(api.eth.getBalance(contract).toString());
    api.logBalances();
    console.log('done');
  } catch (err) {
    console.error(err);
  }
}

const test2 = async () => {
	try {
		const contract = await api.deploy();
		console.log(contract);
		const testCon = "0xa87c15cb158e0da1f71684f7af166d8791559040";
		  const projectId = await api.createProject(contract, api.getDeployerAccount(), 'title','description',400,'2012.08.10');
		  console.log(projectId," 1111");
		  const projectId2 = await api.createProject(contract, api.getDeployerAccount(), 'title2','description2',2400,'2018.08.10');
		   console.log(projectId2," 2222");
		    console.log(api.getFundingStatus(contract, projectId));
			 console.log(api.getFundingStatus(contract, projectId2));
			
		  api.invest("0x61a92139c39ca9c54918ed188bc530d6ac00a75a", "0x3bc4fdbb79810818d1fa4eaf30af296b2c6d220f", 0, 102000);
		  api.invest("0x61a92139c39ca9c54918ed188bc530d6ac00a75a", "0x3bc4fdbb79810818d1fa4eaf30af296b2c6d220f", 1, 220002000);
		// const output =  await api.listAllProject(contract);
		//console.log(api.getCreatorAddress(contract,projectId),"  hello");
		 // const output2 = await api.creatorViewProject(contract,api.getCreatorAddress(contract,projectId));

		
		  
		 await api.viewInvestedProject("0x61a92139c39ca9c54918ed188bc530d6ac00a75a","0x3bc4fdbb79810818d1fa4eaf30af296b2c6d220f");
		 //console.log(output3);
 } catch (err) {
    console.error(err);
  }
}
//test();
console.log("test")
test2();
