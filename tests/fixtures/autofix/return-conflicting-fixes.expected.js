/* ec0lint no-else-return: "error" */
/* ec0lint no-useless-return: "error" */
/* ec0lint no-trailing-spaces: "error" */
function f() {
    if (true) {

    } else {
        return 1;
    }
}
