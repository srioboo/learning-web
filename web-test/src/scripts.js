jQuery(function(){
	
	//Hace que todos los carousel aqui puestos no pasen automaticamente
	jQuery('#carousel-completalook,#carousel-vistos,#carousel-preview,#productCarousel,#carousel-masvendidos,#carousel-novedades,#carousel-motas').carousel({
	      interval: false
	    });
	    
	jQuery('[data-toggle="tooltip"]').tooltip();
	
	// Acciones al pulsar en los filtros
	jQuery("#facets").on('click','[id^="facet_checkbox"]',function(event){
		var facetId = jQuery(this)[0].id.replace("facet_checkbox","");
        var facetRemove = jQuery("#removeText").val();
        var grillBD = jQuery("#grillPageSize").data("value");
        setCurrentId("facet_checkbox"+facetId);
        displayProgressBar();
       //IBM 37918 AVN INCIO
        url = jQuery("#ajaxCategory").val();
        //IBM 40192 MRL INICIO
        loadProducts(url,false,false,grillBD);
        //IBM 40192 MRL FIN
        //IBM 37918 AVN FIN
    });
	// Abrir o cerrar categorias de filtros
	jQuery('#productsFacets>a').click(function(event){
        event.preventDefault();
        jQuery(this).children('span.glyphicon').toggleClass('glyphicon-chevron-up').toggleClass('glyphicon-chevron-down');
    });
	
	/***
	 *  Controladores de los click en seleccion de region y pais
	 * 
	 */
	jQuery("#regionSelect").on('click','li a', function(event){		
	   		event.preventDefault();
	   		var newRegion = jQuery(this).attr('value');
	   		jQuery('#newRegion').val(newRegion);
	   		jQuery('#newCatalogId').val(jQuery(this).data('catalog'));
	   		
   			if (jQuery(this).hasClass("countryCommerceOption")){
				// Actualizamos valor en campo de formulario
				jQuery('#isCommerceSite').val(true);
				jQuery('#regions.footer').html(jQuery(this).html());
				// Inicializamos la lista de idiomas.
				initializeLanguageOptions(newRegion);
			} else {
				// Actualizamos campo de formulario
				jQuery('#isCommerceSite').val(false);
				// Si es un pais de no venta, lo redireccionamos directamente
				if(jQuery("#languageSelect").hasClass("footer")){
					window.location.href=jQuery(this).attr('href');
				}
				// IBM 33318 SRN enlazar web rusia prehome
				else {
					//jQuery('#languageSelectControls').addClass("hide"); //oculto el lenguaje
					jQuery("#regions").attr('data-url', jQuery(this).attr('href'));
				}
				// /IBM 33318 SRN enlazar web rusia prehome
			}
   			
	});
	
	// Evento cuando pulsamos sobre el idioma en la seleccion de pais (si es del footer, intentara lanzar el evento de cambio de region)	
	jQuery("#languageSelect").on('click','li a', function(event){
   		event.preventDefault();
		// Copiamos el valor seleccionado al contenedor con clase "selected"
		var newLanguage = jQuery(this).attr('value');
		// Actualizamos valor del campo oculto en el formulario
		jQuery('#newLanguage').val(newLanguage);
		
		if(jQuery("#languageSelect").hasClass("footer")){
			preProcessRegionChange();
		} else {
			jQuery('.prehome #languages').html(jQuery(this).html()+'<span class="caret"></span>');
		}
	});
	// Accion del boton confirmar el cambio de region, procesa el cambio
	jQuery("#okRegionConfirm").on('click',function(event){
		processLocaleDialog();
	});
	
	jQuery("#cancelRegionConfirm").on('click',function(event){
		// comportamiento al cancelar
		var region = jQuery("#currentRegion").val();
		var regionTxt = jQuery("#regionSelect li a[value='" + region + "']").html();
		jQuery('#regions.footer').html(regionTxt);
		initializeLanguageOptions( region );
	});
		
	jQuery('.prehome #regionSelect li a').click(function(){
		jQuery('.prehome #regions').html(jQuery(this).html()+'<span class="caret"></span>');
	});
	// Procesa el cambio de region
	jQuery('#regionChangeConfirm').click(function(event){
		event.preventDefault();
		processLocaleDialog();
	});
	
	
		
	/***
	 *  FIN Controladores de los click en seleccion de region y pais
	 */
	// Evento para enviar formulario de edicion de la cuenta
	jQuery("#WC_AccountDisplay_links_2").on('click',function(event){
		submitSpecifiedRegisterForm(document.Logon);
		return false;
	});
	// Evento para enviar el login 
	jQuery("#WC_AccountDisplay_FormInput_logonId_In_Logon_1").on('keypress',function(event){
		if(event.keyCode==13)submitSpecifiedRegisterForm(document.Logon);
	});
	// Evento para enviar el login 
	jQuery("#WC_AccountDisplay_FormInput_logonPassword_In_Logon_1").on('keypress',function(event){
		if(event.keyCode==13)submitSpecifiedRegisterForm(document.Logon);
	});
	
	// Evento para enviar a una pagina si el formulario ya ha terminado de enviarse 
	jQuery("#WC_PasswordResetDisplay_Link_1").on('click',function(event){
		url = jQuery(this).data('url');
		setPageLocation(url);
	});
	 
	 // Evento al cambiar el numero de elemntos en parrilla
	 jQuery("#searchBasedNavigation_widget").on('change','#pageSize',function(event){
	        event.preventDefault();
	        setCurrentId('pageSize');
	        SearchBasedNavigationDisplayJS.setNumResultsPerPage(this.value);
	 });
	 
	 // Evento para redirigir a la direccion en la libreta de direcciones
	 jQuery("#WC_AjaxAddressBookForm_div_19").on('click',function(event){
	        event.preventDefault();
	        urlLogon = jQuery(this).data('url');
	        setPageLocation(urlLogon);
	 });
	 
	 /**
	  * Metodo para borrar desde la wishlist
	  * 
	  * Se cambio el id dado que coincidia con otros identificadores
	  * 
	  */
	 jQuery('[id^="DeleteItemFromWishlist_"]').on('click',function(event){
		event.preventDefault();
		var url = jQuery(this).data('url');
		if(url != ''){
			window.location.href = url;
		}
	});
	
	 jQuery('[id^="WC_CatalogEntryDBThumbnailDisplayJSPF_"]').on('click',function(event){
		event.preventDefault();
		var url = jQuery(this).data('url');
		//IBM 33658 AVN Nos aseguramos que tengamos una url
		if(url != ''){
			window.location.href = url;
		}
	});
	 
	jQuery('[id^="AddWC_CatalogEntryDBThumbnailDisplayJSPF_"]').on('click',function(event){
		event.preventDefault();
		var catEntryIdToUse = jQuery(this).data('catentryid');
		setCurrentId(this.id);
		categoryDisplayJS.AddItem2ShopCartAjax(catEntryIdToUse,1);
	});
	
	// Evento para enviar el formulario de registro.
	jQuery("#WC_UserRegistrationUpdateForm_links_1").on('click',function(event){
		event.preventDefault();
		//IBM 37259 AVN SE AGREGA PARAMETRO PARA QUE ENVIE EL FORMULARIO
		MyAccountDisplay.prepareSubmit(document.Register,true);return false;
	});

	// IBM 41676 FJRG INICIO: Mi cuenta informacion aviso comercial
	jQuery("#WC_UserRegistrationAddForm_FormInput_sendMeEmail_In_Register_2").on('click',function(event){
		event.preventDefault();
	});
	// IBM 41676 FJRG FIN
	
	jQuery.uaMatch = function( ua ) {
	    ua = ua.toLowerCase();
	    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
	        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
	        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
	        /(msie) ([\w.]+)/.exec( ua ) ||
	        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) || [];
	    return {
	        browser: match[ 1 ] || "",
	        version: match[ 2 ] || "0"
	    };
	};
	
	if ( !jQuery.browser ) {
	    var 
	    matched = jQuery.uaMatch( navigator.userAgent ),
	    browser = {};
	    if ( matched.browser ) {
	        browser[ matched.browser ] = true;
	        browser.version = matched.version;
	    }
	    // Chrome is Webkit, but Webkit is also Safari.
	    if ( browser.chrome ) {
	        browser.webkit = true;
	    } else if ( browser.webkit ) {
	        browser.safari = true;
	    }
	    jQuery.browser = browser;
	    jQuery.browser.msie=(/msie|trident/i).test(navigator.userAgent);
	    jQuery.browser.chrome=(/chrome|trident/i).test(navigator.userAgent);
	    jQuery.browser.mozilla=(/mozilla|trident/i).test(navigator.userAgent); 
	    jQuery.browser.safari=(/safari|trident/i).test(navigator.userAgent);
	    
	}
	
	// PRY67 SRN cambio del footer para que muestre la region y el lenguaje
	regionText = jQuery("#regionSelect .regionOption[data-catalog='" + WCParamJS.catalogId + "']").html();
	jQuery("#regions").html(regionText);
	
	var region = jQuery("#currentRegion").val();
	var languagesOptions = jQuery("#" + region + "_languagesOptions");
	if (languagesOptions.length > 0 ){
		
		// Y sustituimos el contenido en el contenedor de idiomas
		jQuery('#languageSelect').html(
		  languagesOptions.children().clone(true, true) // true, true para que clone tb los eventos asociados a los contenedores.
		);
		
		// Mostramos select de idiomas
		// Mostramos select de idiomas si tiene mas de 1 elemento
		var numeroElementos  = languagesOptions.children().length;
		if (numeroElementos > 1){
			jQuery('#languageSelectControls').removeClass("hide");
		} else {
			jQuery('#languageSelectControls').addClass("hide");
		}

		// Mostrando el idioma actual
		var langId = jQuery("#langId").val();	
		
		languageText = jQuery("#languageSelect .languageOption[value='" + langId + "']").html();
		jQuery("#languages").html(languageText);		
	} 
	// /PRY67 SRN test para process dialog
});

/***
 * Funcion que inicializa los datos necesarios para el correcto funcionamiento de todas las paginas
 * - se debe importar en todas las paginas
 * - necesita los input correspondiente con los datos
 */
// Retrieve data
var generalData = jQuery("#generalData");
var otherData = jQuery("#otherData");
		
// Convert the WCParam object which contains request properties into javascript object
var WCParamJS = {
	
	"storeId": generalData.data("storeid") || '',
	"catalogId": generalData.data("catalogid") || '',
	"categoryId": generalData.data("categoryid") || '',
	"langId": generalData.data("langid") || '',
	"pageView": generalData.data("pageview") || '',
	"orderBy": generalData.data("orderby") || '',
	"orderByContent": generalData.data("orderbycontent") || '',
	"searchTerm": generalData.data("searchterm") || '',
	"sType": generalData.data("stype") || '',
	"sorteLocAddr": generalData.data("storelocatoaddress") || ''
};
var absoluteURL = otherData.data("absoluteurl") || ''; //"<c:out value="${env_absoluteUrl}"/>";
var imageDirectoryPath = otherData.data("imagedirectorypath") || ''; // "<c:out value="${jspStoreImgDir}"/>";
var styleDirectoryPath = otherData.data("styledirectorypath") || ''; // "<c:out value="${env_vfileColor}"/>";
var supportPaymentTypePromotions = otherData.data("supportpaymenttypepromotions") || ''; // <c:out value="${supportPaymentTypePromotions}"/>;

var subsFulfillmentFrequencyAttrName = otherData.data("subsfulfillmentfrequencyattrname") || ''; // "<c:out value="${env_subsFulfillmentFrequencyAttrName}"/>";
var subsPaymentFrequencyAttrName = otherData.data("subspaymentfrequencyattrname") || ''; // "<c:out value="${env_subsPaymentFrequencyAttrName}"/>";
var subsTimePeriodAttrName = otherData.data("substimeperiodattrname") || ''; // "<c:out value="${env_subsTimePeriodAttrName}"/>";

var storeNLS = null;

//Summary: Returns the absolute URL to use for prefixing any Ajax URL call.
//Description: Dojo does not handle the case where the parameters in the URL are delimeted by the "/" forward slash. Therefore, in order to
//             workaround the issue, all AJAX requests must be done using absolute URLs rather than relative.
//Returns: The absolute URL to use for prefixing any Ajax URL call.
function getAbsoluteURL() {
	if (absoluteURL != "") {
		var currentURL = document.URL;
		var currentProtocol = "";
	
		if (currentURL.indexOf("://") != -1) {
			currentProtocol = currentURL.substring(0, currentURL.indexOf("://"));
		}
		
		var savedProtocol = "";
		if (absoluteURL.indexOf("://") != -1) {
			savedProtocol = absoluteURL.substring(0, absoluteURL.indexOf("://"));
		}
		
		if (currentProtocol != savedProtocol) {
			absoluteURL = currentProtocol + absoluteURL.substring(absoluteURL.indexOf("://"));
		}
	}
	
	return absoluteURL;
}
//Summary: Returns the path pointing to the shared image directory.
//Description: In order to get the image directory path in any javascript file, this function can be used.
//Returns: The path to reference images.
function getImageDirectoryPath() {
	return imageDirectoryPath;
}
//Summary: Returns the path pointing to the directory containing color-dependant image files.
//Description: In order to get the directory containing color-dependant image files in any javascript file, this function can be used.
//Returns: The path to reference color-dependant image files.
function getStyleDirectoryPath() {
	return styleDirectoryPath;
}

var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

dojo.require("wc.service.common");
dojo.require("dojo.number");

if(storeNLS == null) {
 dojo.requireLocalization("storetext", "StoreText");
 storeNLS = dojo.i18n.getLocalization("storetext","StoreText");
}
