// https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen

export default function migratoryBirds(birds: number[]): number {
  let counter = new Map<number, number>();
  let maxSighting = 0;
  let minBird = 0; // lowest id of max-sighting

  for (let bird of birds) {
    let count = 1 + (counter.get(bird) ?? 0)
    counter.set(bird, count)


    if (minBird == 0) {
      minBird = bird
    } else if (count > maxSighting) {
      minBird = bird
      // set max-sightings if this bird has now been spotted the most
      maxSighting = count
    } else if (count == maxSighting && bird < minBird) {
      minBird = bird
    }
  }

  return minBird;
}

/*
each number is a bird type
keep a running total of bird types spotted
return smallest id if there are multiple ids with the same count

in:
1 1 2 2 3
out:
1


// attempt 1:
// 1- build a hash of bird and count
counts = {bird:count}
for bird in birds
  counts[bird]++
// 2- iterate over hash of bird & count
// find highest count? no
// this requires multiple loops.
// better to keep track of highest sighting & minimum highest sighted bird

// attempt 2:
// keep track of counts using a map
// keep track of bird with highest count yet lowest id
counts = {bird:count}
max-sightings = 0
max-bird = 0
for bird in birds
  counts[bird]++

  // set max-sightings if this bird has now been spotted the most
  if counts[bird] > max-sightings
    max-sightings = counts[bird]

  if max-bird == 0
    max-bird = bird
  if counts[bird] > max-sightings
    max-bird = bird
  if counts[bird] == max-sightings && bird < max-bird
    max-bird = bird

1 1 2 2 3
for bird,idx in birds:

idx 0
bird = 1
counts[1]++ = 1

if 1 > 0
  max-sightings = 1

max-bird = 1

idx 1
bird = 1
  counts[1]++ = 2

if 1 > max-sightings
*/
