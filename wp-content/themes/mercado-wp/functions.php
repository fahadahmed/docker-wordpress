<?php

function mercado_theme_styles() {
    wp_enqueue_style('bootstrap_css', get_template_directory_uri().'/node_modules/bootstrap/dist/css/bootstrap.min.css');
    wp_enqueue_style('main_css', get_template_directory_uri().'/style.css');
}

add_action('wp_enqueue_scripts', 'mercado_theme_styles');

function mercado_theme_scripts() {
    wp_enqueue_script('bootstrap_js', get_template_directory_uri().'/node_modules/bootstrap/dist/js/bootstrap.min.js', array('jquery'),'',true);
    wp_enqueue_script('angular_js', get_template_directory_uri().'/node_modules/angular/angular.min.js',array(),'',true);
    wp_enqueue_script('ui_router_js', get_template_directory_uri().'/node_modules/angular-ui-router/release/angular-ui-router.min.js',array(),'',true);
    wp_enqueue_script('dirPagination_js', get_template_directory_uri().'/node_modules/angular-utils-pagination/dirPagination.js',array(),'',true);
    wp_enqueue_script('textAngular_rangy_js', get_template_directory_uri().'/node_modules/textangular/dist/textAngular-rangy.min.js',array(),'',true);
    wp_enqueue_script('textAngular_sanitize_js',get_template_directory_uri().'/node_modules/textangular/dist/textAngular-sanitize.min.js',array(),'',true);
    wp_enqueue_script('textAngular_js', get_template_directory_uri().'/node_modules/textangular/dist/textAngular.min.js',array(),'',true);
    wp_enqueue_script('app_js',get_template_directory_uri().'/app.js',array(),'',true);
}

add_action('wp_enqueue_scripts', 'mercado_theme_scripts');

?>
