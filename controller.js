// basic functionalities
function connectFunc(){
    console.log("Connecting to " + document.getElementById('broker').value);
    // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
    client = mqtt.connect(document.getElementById('broker').value)
    // console.log(document.getElementById('broker').value);
  document.getElementById('status').value = 'connecting ...'
    client.on("connect", function(){
        document.getElementById('status').value = 'connected'
      console.log("Successfully connected to " + document.getElementById('broker').value);
    })
  
    client.on("message", function (topic, payload) {
     document.getElementById('incoming').innerHTML = `<tr><td>${topic}</td><td>${payload}</td><td>${date.toDateString() + "" + date.toLocaleTimeString()}</td></tr>` 
    })
  
  }
  var pub_topic = document.getElementById('pub-topic')
  var pub_payload = document.getElementById('pub-payload')
  var sub_topic = document.getElementById('sub-topic')
  var date =  new Date()
  
  function publishFunc(){
    if(pub_topic.value == sub_topic.value){
        client.publish(pub_topic.value, pub_payload.value, date)
        document.getElementById('publish').innerHTML = `<tr><td>${pub_topic.value}</td><td>${pub_payload.value}</td><td>${date.toDateString() + "" + date.toLocaleTimeString()}</td></tr>` 
       
    }else{
        
        document.getElementById('publish').innerHTML = `<tr><td>${pub_topic.value}</td><td>${pub_payload.value}</td><td>${date.toDateString() + "" + date.toLocaleTimeString()}</td></tr>` 
     }
    }
  
  
  function subscribeFunc(){
    if(pub_topic.value == sub_topic.value){
    client.subscribe(sub_topic.value, date)
    document.getElementById('subscribe').innerHTML = `<tr><td>${sub_topic.value}</td><td>${date.toDateString() + "" + date.toLocaleTimeString()}</td></tr>` 
  }else{
      
  }
}