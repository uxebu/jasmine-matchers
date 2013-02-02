WORKSPACE=${CURDIR}
DIST_DIR=${WORKSPACE}/dist

build:
	mkdir -p ${DIST_DIR}
	find ${WORKSPACE}/src -name *.js | xargs cat > ${DIST_DIR}/matchers.js
