$.validator.addMethod("check_pdf_file",
    function(value) {
        file_extension = value.split('.').pop();
        if(file_extension == "pdf" || file_extension == "doc" || file_extension == "docx") {
            return true;
        } else {
            return false
        }
        
    },
    "Invalid file format");