function getFilesToBackup(lastBackup, changes) {
    const arr = []
  
    changes.forEach(([id, timestamp]) => 
      timestamp > lastBackup && (arr[id] = id)
    )
    return arr.filter(a => a)
  }

  let prueba = getFilesToBackup(1556300600, [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
  ])

  console.log(prueba)

const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

console.log(getFilesToBackup(lastBackup, changes));   // => [ 1, 3 ]