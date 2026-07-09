
const fs = require('fs');
const ht = fs.readFileSync('owner-dashboard/index.html', 'utf8');
const ids = ['home', 'prod', 'del', 'client', 'staff', 'routeMaster', 'sales'];
ids.forEach(id => {
    console.log(id, ht.includes('id=\
+id+
\') || ht.includes(\id=\"+id+\"\));
});

