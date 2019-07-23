pragma solidity ^0.4.0;
contract AWT{
    struct Device{
        bool isActive;
        string values;
        uint type_device;
        string title;
        string description;
        address creator;
        address[] collaborate_keys;
    }
    Device[] devices;

    event DeviceAdded(uint id);
    event ChangeValue(
       uint id,string values
    );
    struct MyStruct {
        uint field1;
        uint field2;
    }

    MyStruct[] public myStructs;

    function pushStruct() 
        constant
        returns(uint arrayLength) 
    {
        MyStruct memory m;
        m.field1 = 1;
        m.field2 = 2;
        myStructs.push(m);
        return myStructs.length;
    }
    



    function create_device(string _title, string _description, string _values, uint _type_device) public
        {
        
        uint offSet = devices.length++;
        Device m = devices[offSet];
        m.isActive = true;
        m.values = _values;
        m.type_device = _type_device;
        m.title = _title;
        m.description = _description;
        m.creator = msg.sender;
        m.collaborate_keys = new address[](0);       
        


    }
    
    
    function returnNDevice() constant returns(uint) {
        uint nbr_offer =devices.length;
        return(nbr_offer);
    }



    function show_type(uint device_id) constant returns (uint){
        return devices[device_id].type_device;
    }
     function show_des(uint device_id) constant returns (string){
        return devices[device_id].description;
    }

    function get_title(uint device_id) constant returns (string){
        return devices[device_id].title;
    }

    function show_values(uint device_id) constant returns (string){
        return devices[device_id].values;
    }
      function show_activate(uint device_id) constant returns (bool){
        return devices[device_id].isActive;
    }


    function update_values(uint device_id, string _values){
        require(devices[device_id].creator == msg.sender);
        devices[device_id].values = _values;
        ChangeValue(device_id,_values);
    }

    function update_title(uint device_id, string title){
        require(devices[device_id].creator == msg.sender);
        devices[device_id].title = title;
    }
    function update_type(uint device_id, uint _type){
        require(devices[device_id].creator == msg.sender);
        devices[device_id].type_device = _type;
    }
    
    function update_collaborate_keys(uint device_id, address _collaborate_sensor){
        require(devices[device_id].creator == msg.sender);
        devices[device_id].collaborate_keys[devices[device_id].collaborate_keys.length] = _collaborate_sensor;
    }
     function update_activate(uint device_id, bool _activate){
        require(devices[device_id].creator == msg.sender);
        devices[device_id].isActive = _activate;
    }
    
    


 

    function get_active_devices() constant returns (uint[]){
        uint numActive = 0;
        for(uint i = 0; i < devices.length; i++){
            if (devices[i].isActive == true) {
               numActive++;
            }
        }
        uint[] memory activeProjects = new uint[](numActive);
        uint idx = 0;
        for(uint j = 0; j < devices.length; j++){
            if (devices[j].isActive == true) {
               activeProjects[idx++] = j;
            }
        }
        return activeProjects;
    }




    function get_devices_created() constant returns (uint[]){
        bool[] memory hasCreatedProject = new bool[](devices.length);
        uint numberOfCreatedProjects = 0;
        for(uint i = 0; i < devices.length; i++){
            hasCreatedProject[i] = false;
            if(devices[i].creator == msg.sender && devices[i].isActive == true){
                hasCreatedProject[i] = true;
                numberOfCreatedProjects++;
            }
        }
        uint[] memory output = new uint[](numberOfCreatedProjects);
        uint idx = 0;
        for(uint j = 0; j < devices.length; j++){
            if(hasCreatedProject[j]){
                output[idx++] = j;
            }
        }
        return output;
    }
    
    function get_device(uint i) constant returns(string, uint, string, string, address){
        return (devices[i].values, devices[i].type_device, devices[i].title, devices[i].description, devices[i].creator);
    }
}
