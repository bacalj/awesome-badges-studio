# Awesome Badge Studio

Here are some queries that work

```js

// published badges with students that earned it
*[_type == "badge" && !(_id in path('drafts.**'))]{
  _id, title, 
  student[]->{_id, name, avatar}
}

// published students with their badges
*[_type == "student" && !(_id in path('drafts.**'))]{
  _id, name, 
  "badges": *[_type == "badge" && references(^._id)]{
  	    _id, title, badgeImage
    }
}

// student by name and their badges
*[_type == "student" && gSuiteName == "foo@campusschool.net"]{
  _id, name, avatar,
  "badges": *[_type == "badge" && references(^._id)]{
  	_id, title, badgeImage
	}
}

```