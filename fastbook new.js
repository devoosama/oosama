
    var locationData =[{"Id":"60d2df036755e8de168d8db7","Name":"Casablanca","Code":"CASABLANCA"},{"Id":"0566245a-7ba1-4b5a-b03b-3dd33e051f46","Name":"Nador","Code":"NADOR"},{"Id":"8d780684-1524-4bda-b138-7c71a8591944","Name":"Rabat","Code":"RABAT"},{"Id":"889689b5-1099-4795-ac19-c9263da23252","Name":"Tetouan","Code":"TETOUAN"},{"Id":"8457a52e-98be-4860-88fc-2ce11b80a75e","Name":"Tangier","Code":"TANGIER"},{"Id":"138660df-f645-488f-8458-97186b17c7f9","Name":"Agadir","Code":"AGADIR"}];
    var AppointmentCategoryIdData =[{"Id":"5c2e8e01-796d-4347-95ae-0c95a9177b26","Name":"Normal","Code":"CATEGORY_NORMAL"},{"Id":"37ba2fe4-4551-4c7d-be6e-5214617295a9","Name":"Premium","Code":"CATEGORY_PREMIUM"},{"Id":"0ec883de-84f4-4474-ae60-572e675873cb","Name":"Prime Time","Code":"PRIME_TIME"}];
      var visaIdData =[{"Id":"fb33a698-a3bd-4b02-8ef7-b589775187df","Name":"National Visa","VisaTypeCode":"NATIONAL_VISA"},{"Id":"c805c157-7e8f-4932-89cf-d7ab69e1af96","Name":"Schengen Visa","VisaTypeCode":"SCHENGEN_VISA"},{"Id":"bddf9df8-5f71-413e-aeb3-8f59308e79a2","Name":"Schengen Visa - Previous Visa Holder","VisaTypeCode":"SCHENGEN_VISA_EXISTING"},{"Id":"f45b9b2b-0bae-4a04-bf61-9dbabb9db2ac","Name":"Schengen Visa - First Demand","VisaTypeCode":"SCHENGEN_VISA"}];
    var baseurl = 'http://synergy-api-service/';
     var visasubIdData =[{"Id":"ab828ce6-d1b3-46e0-8e91-8ffa27d2b6d7","Name":"Schengen Visa","Value":"c805c157-7e8f-4932-89cf-d7ab69e1af96"},{"Id":"ccd817eb-c023-4eff-aac9-f6c394e7427f","Name":"Student Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"e9b01d51-2e39-461e-8ae8-9e381a3cf84a","Name":"Visa for highly qualified workers and for intra-company transfers","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"f743c6c1-8827-47de-8e87-791b49c8d5fb","Name":"Non-working residency visa (non-lucrative visa)","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"ba739d8c-cc24-4880-8fbd-6075907d6355","Name":"Long-term residence or EU Long-term residence recover","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"84f24e02-150c-4bd4-9347-13bf418898a0","Name":"Long-term residence visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"cd3c6189-16d7-486d-b8a9-5830dcd87b11","Name":"Entrepreneur visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"fbf41aee-a425-46fa-a0a7-2b9845ac8b0c","Name":"Family Reunification Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"a02e3fcc-8178-4463-90b8-60fa472e675a","Name":"Investor visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"c325bdb4-d7a5-4b39-8b02-93e7f1376a1e","Name":"Self-employed work visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"3336ebda-c3bd-495d-a76e-07287c70dc2d","Name":"Residence visa with working permit exemption","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"c3d3514c-599a-4b40-b157-fe2ac4ade0eb","Name":"Residence and Employment Work Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"5ced1786-8bbb-495e-99a2-c0a6179119b3","Name":"Internship visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"8f96a4cc-abd9-4602-bcaf-f5b04c994695","Name":"Relocation With In The Same Company","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"85fa1bcc-7406-4b8c-a428-fab401673505","Name":"Study less than 90 Days","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"6d9e0818-54e5-4774-bcac-1e278c11656b","Name":"Researcher visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"9b470d09-dc01-4c32-87eb-1f37c6e532fa","Name":"Study More Than 180 Days","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"249c2002-3054-45db-bbfc-adce6482488b","Name":"Investment Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"37eef453-2caf-4559-97e9-307704381a50","Name":"Highly qualified Work Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"707c139d-f8f4-43d2-9e84-95f80e6c931e","Name":"Long-term residence permit recuperation visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"a8d99e75-4693-4f69-aecb-bea75f8c9bea","Name":"Non-lucrative residence visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"87c2f718-b967-48f6-a230-206e0f58dd56","Name":"EU National Family Member Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"f1cbd765-3a3b-43a4-bf02-6501ecf5b64e","Name":"Study between 90 and 179 days","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"7e8ef073-3abd-4fa5-ad66-44bf6326effc","Name":"Study Family Member ","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"ec498f00-5a86-4b2e-bca7-7a6b5b8b1d52","Name":"National Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"0dfd7a9e-0c5b-4cfc-9210-f5d9ce62960c","Name":"Schengen Visa - Previous Visa Holder","Value":"bddf9df8-5f71-413e-aeb3-8f59308e79a2"},{"Id":"75f85296-9341-4618-a9ac-3b70f1f454d5","Name":"Schengen Visa - First Demand","Value":"f45b9b2b-0bae-4a04-bf61-9dbabb9db2ac"},{"Id":"0c6445de-03f8-4a52-92ae-a3f647e6644c","Name":"Work Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"}];
     var missionData =[{"Id":"beae2d19-89a9-46e7-9415-5422adafe619","Name":"Consulate - Casablanca","Code":"CONSULATE_CASABLANCA"},{"Id":"33f113d1-fa23-4292-b865-393675093998","Name":"Consulate - Tetouan","Code":"CONSULATE_TETOUAN"},{"Id":"2c64c42a-1359-437a-9257-d8ad3f566e1a","Name":"Consulate - Nador","Code":"CONSULATE_NADOR"},{"Id":"98a73e17-bf8f-41f2-933e-03e60b009327","Name":"Consulate - Rabat","Code":"CONSULATE_RABAT"},{"Id":"d133459a-6482-45ed-bd00-5ff32aa8b71b","Name":"Consulate - Tangier","Code":"CONSULATE_TANGIER"},{"Id":"4edec922-cd94-4955-9788-802269c9ff44","Name":"Consulate - Agadir","Code":"CONSULATE_AGADIR"}];

    var familyModalClose = false;
    var livenessDeclarationModalClose = false;
    var userConsentModalClose = false;
    $(document).ready(function () {
        $('#userConsent').modal('show');
        $("#AppointmentCategoryId").kendoDropDownList({
           // optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            autoBind: true,
            value:"5c2e8e01-796d-4347-95ae-0c95a9177b26",
            dataSource: AppointmentCategoryIdData
        });
        if ('WEB_EMBASSY'==='WEB_BLS')
        {
             $("#LocationId").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            autoBind: true,
            filter: "contains",
            value:'60d2df036755e8de168d8db7',
            dataSource: locationData
        });
        }

          $("#MissionId").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            autoBind: true,
              filter: "contains",
              value: 'beae2d19-89a9-46e7-9415-5422adafe619',
            dataSource: missionData
        });

         $("#VisaType").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
             filter: "contains",
             autoBind: true,
            value:'fb33a698-a3bd-4b02-8ef7-b589775187df',
             dataSource: visaIdData
        });

         $("#VisaSubTypeId").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            autoBind: true,
            value:'ec498f00-5a86-4b2e-bca7-7a6b5b8b1d52',
             dataSource: visasubIdData
        });


        var slotFooter = kendo.template($("#slot-footer-template").html());
        var slottemplate = kendo.template($("#Slottemplate").html());
        var height = 500;

        $("#ApplicantsNo").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Value",
            filter: "contains",

            autoBind: true,
            dataSource: [
                { Name: "2 Members", Value: "2" },
                { Name: "3 Members", Value: "3" },
                { Name: "4 Members", Value: "4" },
                { Name: "5 Members", Value: "5" },
                { Name: "6 Members", Value: "6" },
            ]
        });

        const fileInput = document.getElementById('uploadfile-1');

        fileInput.onchange = () => {
            ShowLoader();
            const selectedFiles = [...fileInput.files];
            var fd = new FormData();
            var files = selectedFiles;

            // Check file selected or not
            if (files.length > 0) {
                fd.append('file', files[0]);
            }

            $.ajax({
                url: "/MAR/query/UploadProfileImage",
               //url: baseurl + "common/query/UploadProfileImage",
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function (result) {
                    HideLoader();

                    if (result.success) {
                        $("#uploadfile-1-preview").attr("src", "/MAR/query/getfile?fileid=" + result.fileId);
                        $("#ApplicantPhotoId").val(result.fileId);
                        $('#photoUploadModal').modal('show');
                    }
                     else{
                        alert(result.err);
                    }
                }
            });
        }

        if('Individual'=='Family'){
            $("#members").show();
           var appointmentFor = document.getElementById("family");
            appointmentFor.checked = true;
             $("#ApplicantsNo").data('kendoDropDownList').value("1");
        }

        var evc=document.getElementById("EmailVerificationCode");
         evc.onpaste = e => e.preventDefault();
        evc.oncopy = e => e.preventDefault();
        $("#AppointmentDate4").on("keydown", function (e) {
            e.preventDefault();
        });
        $("#AppointmentDate4").on("click", function (e) {
            $("#AppointmentDate4").data("kendoDatePicker").open();
            e.preventDefault();
        });

        $('#familyDisclaimer').on('hide.bs.modal', function (e) {
            if (!familyModalClose) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            familyModalClose = false;
            return true;
        });
        $('#LivenessDeclaration').on('hide.bs.modal', function (e) {
            if (!livenessDeclarationModalClose) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            livenessDeclarationModalClose = false;
            return true;
        });
        $('#userConsent').on('hide.bs.modal', function (e) {
            if (!userConsentModalClose) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            userConsentModalClose = false;
            return true;
        });
    });
    function OnChangePhoto() {
         $("#uploadfile-1-preview").attr("src", "/assets/images/avatar/01.jpg");
        $("#ApplicantPhotoId").val("");
    }
    function OnPhotoAccepted() {
        $(".upload-photo-btn").hide();
    }
    function OnSlotSelect(e) {
        if (e.dataItem.Count <= 0) {
            e.preventDefault();
        }
    }
    function OnSlotChange(e) {
        var dataItem = e.sender.dataItem();
        if (dataItem.Count<=0) {
            e.preventDefault();
        }
    }
    function OnSlotOpen() {

        this.setDataSource(slotDataSource);
        var id = this.element.attr("id");
        var values = '';
        if (id !=='AppointmentSlot4') {
            values = values + $("#AppointmentSlot4").data("kendoDropDownList").value();
        }
        var items = this.items();
        for (let item of items) {
            var dataItem = this.dataItem($(item));
            if (dataItem.Count > 0) {
                var reg = new RegExp(dataItem.Id, 'g');
                var count = (values.match(reg) || []).length;
                if (dataItem.Count <= count) {
                    dataItem.Count = 0;
                    $(item).find(".slot-item").css("background-color", '#ff6666');
                    $(item).find(".slot-item").css("cursor", 'not-allowed');
                    $(item).addClass("k-disabled");
                    $(item).find(".slot-item").addClass("k-disabled");
                }
            }
        }
    }
    var allowedDates = [];




     function onFeeSubmit(ispayment) {
        var data = {
            Id: $("#Id").val(),
            ValueAddedServices: $("#ValueAddedServices").val(),
        };

            ShowLoader();
        var id = $("#Id").val();
            $.ajax({
                type: "POST",
                data:data,
                url: "/MAR/BLSAppointment/TotalFeeUpdate",
                success: function (data) {
                    HideLoader();
                    if (data.success) {
                        $("#paymentDetails").removeClass("text-primary");
                        $("#paymentDetails").addClass("text-success");
                        document.getElementById("progress-percent").innerHTML = '75%'
                        $('.progress-bar').css('width', '80%');
                        if (ispayment) {
                            OnPaymentInitiated(data.model);
                        }
                        else {
                            OnAppointmentInitiated(data.model);
                        }

                    }
                    else {
                        ShowError(data.error);
                    }

                },
                error: function (err) {
                    HideLoader();
                }
            });

    }


    function OnUserConsentReject() {
        userConsentModalClose = true;
        alert("You cannot proceed with appointment. System will redirect to home page");
        window.location.href = "/MAR/home/index";
    }
    function OnUserConsentAccept() {
        userConsentModalClose = true;
        $('#userConsent').modal('hide');
        $('#scamAlert').modal('show');
        return true;
    }
    var slotDataSource = null;
    function OnAppointmentDateOpen(e) {
        var t = kendo.template($("#date-footer-template").html());
        var dp = this;
        setTimeout(function () {
            var div = dp.dateView.popup.wrapper.find(".k-footer").find("#date-legend");
            div.remove();
            dp.dateView.popup.wrapper.find(".k-footer").append(t({ text: "testing" }));
        });
    }
    function OnAppointmentdateChange() {

        var applicantCount = $("#ApplicantsNo").val();
        if (applicantCount == '' || applicantCount == null || applicantCount == undefined) {
            applicantCount = 1;
        }

        var ad = $("#AppointmentDate4").data("kendoDatePicker").value();
        var slot = $("#AppointmentSlot4").data("kendoDropDownList");
        slot.value("");
        slot.setDataSource([]);
        if (ad === null || ad === '' || ad === undefined) {
            slot.value("");
            slot.enable(false);
            return false;
        }
        var appointmentDate = kendo.toString(ad, 'yyyy-MM-dd');
        var locationId = $("#LocationId").val();
        var mid = $("#MissionId").val();
        var categoryId = $("#AppointmentCategoryId").val();
        var ds = $("#DataSource").val();
        var visaType = $("#VisaType").val();
        var visasubType = $("#VisaSubTypeId").val();
        var cd2 = $("#CaptchaData2").val();
        ShowLoader();
        var data = {
            LocationId : locationId,
            AppointmentCategoryId : categoryId,
            AppointmentDate : appointmentDate,
            ApplicantsNo : applicantCount,
            VisaType : visaType,
            VisaSubType : visasubType,
            MissionId: mid,
            DataSource: ds,
            CaptchaData2:cd2
        };
        $.ajax({
            type: "POST",
            data: data,
            url: "/MAR/blsappointment/GetAvailableSlotsByDate",
            dataType: "json",
            success: function (d) {
                if (d.session === true) {
                    window.top.location.href = "/MAR/bls/VisaTypeVerification";
                    return false;
                }
                HideLoader();
                slotDataSource = d;
                slot.enable(true);
            }
        });
    }

    function disableDates(date) {
        var dateVal = kendo.toString(date, 'yyyy-MM-dd');
        var result = allowedDates.find(x => x.DateText === dateVal);

        if (result === null || result === undefined || result.AppointmentDateType>0) {
            return true;
        }
        else {
            return false;
        }
    }
    function ShowCommonModal(header, body) {

        $('#commonModalHeader').html(header);
        $('#commonModalBody').html(body);
        $('#commonModal').modal('show');
    }
    function RequestCode(e, source,isRefresh) {

        var valid = ValidateAppointment(e);
        if (valid == false) {
            return false;
        }
        var html = $(source).html();
        var email = $("#Email").val();
        $(source).attr("disabled", true);
        if (isRefresh) {
            $(source).html('<i class="fa fa-loader fa-spin"></i>');
        }
        else {
            $(source).html('Sending<span class="pl-3 fa fa-refresh fa-spin"></span>');
        }
        $.ajax({
            type: "GET",
            url: "/MAR/blsappointment/SendAppointmentVerificationCode?code=yLiXI0IR8q2eD%2bO6mKRQXTRsAkEhb%2bpUU5zfK%2fO8VVPveTrc2btljiWQaafOJS0%2f5Wul14IO6Im1EfTODtfveGLj5dF0R5x6lEHvK%2f1ShusmhpGDKjGgye%2fmXEIsFYPP",
            dataType: "json",
            success: function (data) {
                $(source).removeAttr("disabled");
                if (data.success) {
                    //HideLoader();
                    $(source).html(html);
                    $(source).attr("disabled", false);
                    ShowCommonModal('OTP Sent',' An OTP has been sent on your registered e-mail ID. Do not share this OTP with any unauthorized personnel.');

                    $('#btnSenderificationCode').html('Resend Verification Code');
                    $('#btnSenderificationCode').removeClass('btn-primary');
                    $('#btnSenderificationCode').addClass('btn-light');
                    $(".div-email-code").show();
                    if ('False'==='True') {
                        $(".div-mobile-code").show();
                    }
                    else {
                        $(".div-mobile-code").hide();
                    }

                }
                else {
                    if (data.sessionExpired) {
                        alert('Your session has been expired. Please login again to continue.');
                        window.location.href = "/MAR/blsappointment/manageappointment";
                        return false;
                    }
                    $(source).attr("disabled", false);
                     $(source).html(html);
                    ShowError(data.error);
                }
            }
        });
    }

    function VerifyApplicant() {
        var code = $("#EmailVerificationCode").val();
        if (code === '' || code === null || code === undefined) {
            ShowError("Please enter email verification code.");
            return false;
        }
        var img = $("#ApplicantPhotoId").val();
        if (img === '' || img === null || img === undefined) {
            ShowError("Please upload applicant photo.");
            return false;
        }
        $('#LivenessDeclaration').modal('show');
        return false;
    }
    function OnLivenessDeclarationReject() {
        livenessDeclarationModalClose = true;
        $('#LivenessDeclaration').modal('hide');
    }
    function OnLivenessDeclarationAccept() {
        livenessDeclarationModalClose = true;
        $('#LivenessDeclaration').modal('hide');
        var img = $("#ApplicantPhotoId").val();
        var appointmentId = $("#Id").val();
        var url = '/MAR/blsappointment/livenessdetection?appointmentId=' + appointmentId + '&applicantPhotoId=' + img;
        OpenPopup(url, { Title: "Verify Applicant", Width: 800, Height: 650 });
        return false;
    }

    function OnApplicantVerified(prm) {
        if (prm.session) {
            $("#btnVerifyApplicant").hide();
            window.location.href = "/MAR/blsappointment/manageappointment";
            return false;
        }
        if (prm.redircet) {
            $("#btnVerifyApplicant").hide();
            window.location.href = "/MAR/blsappointment/manageappointment";
            return false;
        }
        var photo=prm.photo;
        $("#ImageId").val(photo);
        $("#btnVerifiedApplicant").show();
        $("#btnVerifyApplicant").hide();
        $("#btnPayAmount").show();
    }
    function VerifyEmailCode(e, source) {
        var valid = ValidateAppointment(e);
        if (valid == false) {
            return false;
        }
        var code = $("#EmailVerificationCode").val();
        if (code === '' || code === null || code === undefined) {
            ShowError("Please enter email verification code.");
            return false;
        }
        var html = $(source).html();
        $(source).attr("disabled", true);
        $(source).html('Verifying Email<span class="ml-2 fa fa-refresh fa-spin"></span>');
        var code = $("#EmailVerificationCode").val();
        var data = {
            Code: code,
            Value: 'yLiXI0IR8q2eD&#x2B;O6mKRQXTRsAkEhb&#x2B;pUU5zfK/O8VVPveTrc2btljiWQaafOJS0/5Wul14IO6Im1EfTODtfveGLj5dF0R5x6lEHvK/1ShusmhpGDKjGgye/mXEIsFYPP',
            Id:  $('#Id').val()
        }
            $.ajax({
            type: "POST",
            url: "/MAR/blsappointment/VerifyEmail",
                dataType: "json",
                data:data,
            success: function (data) {
                $(source).removeAttr("disabled");
                if (data.success) {
                    $(source).html(html);
                    $(source).attr("disabled", false);
                    $("#btnVerifyEmail").hide();
                    $("#btnVerifiedEmail").show();
                    $("#EmailVerified").val('True');
                    if ('False'==='True') {
                        var mobVerified = $("#MobileVerified").val();
                        if (mobVerified.toLowerCase() === 'true') {
                            $("#btnVerifyAppointment").show();
                        }
                    }
                    else {
                        $("#btnVerifyAppointment").show();
                    }
                }
                else {
                    $(source).attr("disabled", false);
                     $(source).html(html);
                    ShowError(data.error);
                }
            }
        });

    }
     function VerifyAppointment(e, obj) {
        var valid = ValidateAppointment(e);
        if (valid == false) {
            return false;
        }
        var code = $("#EmailVerificationCode").val();
        if (code === '' || code === null || code === undefined) {
            ShowError("Please enter email verification code.");
            return false;
        }
        var img = $("#ApplicantPhotoId").val();
        if (img === '' || img === null || img === undefined) {
            ShowError("Please upload applicant photo.");
            return false;
        }
        var win = GetMainWindow();
        win.iframeOpenUrl = '/MAR/CaptchaPublic/GenerateCaptcha?data=Imh4ET431cerNsafYz7RaX2g%2bNL0Q%2bpSJI32E19%2b0pIcDXCbmjm%2fn0oqZCppWQJamWfH0HlZ8noVK2hXHf3paNOGyJTh%2bfQwtPP5iAZ7NBo%3d';
        win.OpenWindow({ Title: "Verify Appointment", Width: 400, Height: 600 });
        return false;
    }
    function OnVarifyCaptcha(res) {
        if (res.exceeded) {
            window.location.href = window.location.href.split("?")[0];
            return false;
        }
        else if (res.success) {
            $("#btnVerifiedAppointment").show();
            $("#btnVerifyAppointment").hide();
            $("#btnSubmit").show();
            $("#CaptchaData").val(res.captcha);
        }
    }
    var AppointmentData = [];
    function OnAppointmentSubmit(e) {
        var valid = ValidateAppointment(e);
        if (valid == false) {
            return false;
        }
        var detailsString = JSON.stringify(AppointmentData);
        $("#AppointmentDetailsList").val(detailsString);
        return true;
    }

    function ValidateAppointment(e) {
        HideError();
        var mobile = $("#Mobile").val();
        var mobileCC = $("#MobileCountryCode").val();
        var email = $("#Email").val();
        var loc = $("#LocationId").val();
        if (loc == '') {
            ShowError("Please select appointment center");
            return false;
        }
        if ($("#AppointmentCategoryId").val() == '') {
            ShowError('Please select appointment category');
            return false;
        }
        if ($("#AppointmentDate4").val() == '') {
            ShowError('Please select appointment date');
            return false;
        }

        var ad = kendo.toString($("#AppointmentDate4").data("kendoDatePicker").value(), 'yyyy-MM-dd');
        $("#ServerAppointmentDate").val(ad);

        if (mobile == '') {
            ShowError('Please enter mobile number');
            return false;
        }
        if (mobileCC == '') {
            ShowError('Please enter mobile Country Code');
            return false;
        }
        if (email == '') {
            ShowError('Please enter email id');
            return false;
        }
        if ($("#AppointmentSlot4").val() == '') {
            ShowError('Please select appointment slot');
            return false;
        }
        var applicantsCount = $("#ApplicantsNo").val();
        if (applicantsCount == '' || applicantsCount == null) {
            $("#ApplicantsNo").val(1);
            applicantsCount = 1;
        }

        return true;
    }

    function onAgree() {
        $("#appDetails").removeClass("text-primary");
        $("#appDetails").addClass("text-success");
        $("#appointmentDetails").removeClass("text-secondary");
        $("#appointmentDetails").addClass("text-primary");
        document.getElementById("progress-percent").innerHTML='25%'
        $('.progress-bar').css('width', '25%');
        $("#termsDiv").hide();
        $("#applicantDetailsDiv").show();
        BackToTop();
    }

    function onDisagree() {
        window.location.href = "/";
        //LoadPartailView('/MAR/BLSApplication/BLSCustomerHome', $('#cms-content'));
    }

    var onAjaxSuccess = function (res) {
        if (res.success) {
            HideLoader();
            $("#appointmentDetailsDiv").hide();
            $("#termsDiv").show();
            $("#applicantDetailsDivForm").load('/MAR/BlsAppointment/VisaAppointmentForm?appointmentId=' + res.model.Id);
            setStatus(res.model.SaveState);
            BackToTop();
        }
        else {
            if (res.session === true) {
                window.top.location.href = "/MAR/account/login?timeOut=true";
                return false;
            }

            if (res.userverify === true) {
                alert(res.error);
                window.location.href = "/MAR/account/UserVerification?userId=" + res.uid;
                return false;
            }
            HideLoader();
            ShowError(res.error);

        }
    };

    function getVASRow(n) {

        var appNo = document.getElementById('applicantsCount').value;
        var row = n.parentNode.parentNode;
        var cols = row.getElementsByTagName("td");
        var x = cols[1].textContent;
        var amntlen = x.length;
        x = x.substring(0, parseInt(amntlen) - 4);
        var y = $("#totalCharges").html();
        var totamntlen = y.length;
        y = y.substring(0, parseInt(totamntlen) - 4);
        var rowtotId = cols[parseInt(2) + parseInt(appNo)].attributes.id.value;
        var rowtot = $("#" + rowtotId).html();

        const chkId = n.id.substring(3);
        const totrow = rowtotId.substring(3);

        const check = document.querySelector("#" + n.id);
        var isPayable = check.dataset.ispayable;

        if (n.checked) {
            $('#' + chkId).prop('checked', true);
            if (isPayable == "False") {

            } else {
                var z = parseInt(x) + parseInt(y);
                $("#totalCharges").html(z +' MAD');
                $("#totalvasCharges").html(z + ' MAD');

                if (rowtot == '') {
                    $("#" + rowtotId).html(x + ' MAD');
                    $("#" + totrow).html(x + ' MAD');
                } else {
                    $("#" + rowtotId).html(parseInt(x) + parseInt(rowtot) + ' MAD');
                    $("#" + totrow).html(parseInt(x) + parseInt(rowtot) + ' MAD');
                }
            }

        }
        else {
            $('#' + chkId).prop('checked', false);
            if (isPayable == "False") {

            }
            else {
                var z = parseInt(y) - parseInt(x);
                $("#totalCharges").html(z + ' MAD');
                $("#totalvasCharges").html(z + ' MAD');

                if (rowtot == '') {
                    $("#" + rowtotId).html("");
                    $("#" + totrow).html("");
                } else {
                    $("#" + rowtotId).html(parseInt(rowtot) - parseInt(x) + ' MAD');
                    $("#" + totrow).html(parseInt(rowtot) - parseInt(x) + ' MAD');
                }
            }

        }
    }

    function closeModal() {
        $('#vasModal').modal('toggle');
    }


    var gId, gTableId, gAmount, gAssigneeUserId;


    function OnPayment(id, amount) {

        ShowLoader($('#container'));
        var returnUrl = "/MAR/BLSAppointment/AppointmentReceipt";
        var amn = $("#totalCharges").html();
        var apId = $("#Id").val();
        window.location.href = "/MAR/BLSAppointment/CmiOnlinePayment?appointmentId="+apId+"&returnUrl="+returnUrl;
    }

    function setStatus(status){
        $("#SaveState").val(status);
    }



