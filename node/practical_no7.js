const http=require('http'); 
const server=http.createServer(function(req,res){ if(req.url=='/'){ 
res.writeHead(200, {'content-Type':'texthtml'})
res.write("<h1>Home Page </h1>");
 res.end(); 
} 
else if (req.url=='/student'){ 
res.writeHead(200, {'content-Type':'text/html'})
 res.write("<h1>Welcome to Student Page </h1>"); 
res.end; 
}
else if(req.url=='/admin'){ 
res.writeHead(200,{'content-Type':'text/html'}) 
res.write("<h2> Welcome to Admin Page </h2>"); 
res.end();
 } 
else if (req.url=='/classroom'){ 
res.writeHead(200,{'content-Type':'text/html'}) 
res.write("<h1> Welcome to Classroom</h1>"); 
res.end(); 
} 
else if(req.url=='/todolist'){ 
res.writeHead(200, {'content-Type':'text/html'}) 
res.write("<h1> Welcome to your TODO List </h1>"); res.end(); 
} 
else
{ 
res.write("<h1> Invalid Page</h1>");
 res.end(); 
} 
}); 
server.listen(8050); 
console.log("Server is running now");