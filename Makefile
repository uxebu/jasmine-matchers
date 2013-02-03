WORKSPACE=${CURDIR}
DIST_DIR=${WORKSPACE}/dist

build:
	mkdir -p ${DIST_DIR}
	cat ${WORKSPACE}/LICENSE.txt `find ${WORKSPACE}/src -name *.js  ! -name matchers.js` > ${DIST_DIR}/matchers.js
