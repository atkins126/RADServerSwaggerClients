=begin comment

EMS API Documentation

Enterprise Mobility Services API      [Learn about EMS](https://www.embarcadero.com/products/rad-studio/enterprise-mobility-services)      EMS (Enterprise Mobility Services) offers a Mobile Enterprise Application Platform (MEAP)      TurnKey Middleware for Interconnected Distributed Apps

OpenAPI spec version: 0.0.0

Generated by: https://github.com/swagger-api/swagger-codegen.git

=end comment

=cut

#
# NOTE: This class is auto generated by the swagger code generator program. 
# Do not edit the class manually.
# Ref: https://github.com/swagger-api/swagger-codegen
#
package WWW::SwaggerClient::ApiDocApi;

require 5.6.0;
use strict;
use warnings;
use utf8; 
use Exporter;
use Carp qw( croak );
use Log::Any qw($log);

use WWW::SwaggerClient::ApiClient;

use base "Class::Data::Inheritable";

__PACKAGE__->mk_classdata('method_documentation' => {});

sub new {
    my $class = shift;
    my $api_client;

    if ($_[0] && ref $_[0] && ref $_[0] eq 'WWW::SwaggerClient::ApiClient' ) {
        $api_client = $_[0];
    } else {
        $api_client = WWW::SwaggerClient::ApiClient->new(@_);
    }

    bless { api_client => $api_client }, $class;

}


#
# a_pi
#
# Get API EndPoints
# 
# @param string $x_embarcadero_application_id  (optional)
# @param string $x_embarcadero_app_secret  (optional)
# @param string $x_embarcadero_master_secret  (optional)
{
    my $params = {
    'x_embarcadero_application_id' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    'x_embarcadero_app_secret' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    'x_embarcadero_master_secret' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    };
    __PACKAGE__->method_documentation->{ 'a_pi' } = { 
    	summary => 'Get API EndPoints',
        params => $params,
        returns => undef,
        };
}
# @return void
#
sub a_pi {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/api';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type();

    # header params
    if ( exists $args{'x_embarcadero_application_id'}) {
        $header_params->{'X-Embarcadero-Application-Id'} = $self->{api_client}->to_header_value($args{'x_embarcadero_application_id'});
    }

    # header params
    if ( exists $args{'x_embarcadero_app_secret'}) {
        $header_params->{'X-Embarcadero-App-Secret'} = $self->{api_client}->to_header_value($args{'x_embarcadero_app_secret'});
    }

    # header params
    if ( exists $args{'x_embarcadero_master_secret'}) {
        $header_params->{'X-Embarcadero-Master-Secret'} = $self->{api_client}->to_header_value($args{'x_embarcadero_master_secret'});
    }

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    return;
}

#
# get_apijson_format
#
# Get JSON
# 
# @param string $x_embarcadero_application_id  (optional)
# @param string $x_embarcadero_app_secret  (optional)
# @param string $x_embarcadero_master_secret  (optional)
{
    my $params = {
    'x_embarcadero_application_id' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    'x_embarcadero_app_secret' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    'x_embarcadero_master_secret' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    };
    __PACKAGE__->method_documentation->{ 'get_apijson_format' } = { 
    	summary => 'Get JSON',
        params => $params,
        returns => undef,
        };
}
# @return void
#
sub get_apijson_format {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/api/apidoc.json';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept();
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type();

    # header params
    if ( exists $args{'x_embarcadero_application_id'}) {
        $header_params->{'X-Embarcadero-Application-Id'} = $self->{api_client}->to_header_value($args{'x_embarcadero_application_id'});
    }

    # header params
    if ( exists $args{'x_embarcadero_app_secret'}) {
        $header_params->{'X-Embarcadero-App-Secret'} = $self->{api_client}->to_header_value($args{'x_embarcadero_app_secret'});
    }

    # header params
    if ( exists $args{'x_embarcadero_master_secret'}) {
        $header_params->{'X-Embarcadero-Master-Secret'} = $self->{api_client}->to_header_value($args{'x_embarcadero_master_secret'});
    }

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    return;
}

#
# get_apiyaml_format
#
# Get YAML
# 
# @param string $x_embarcadero_application_id  (optional)
# @param string $x_embarcadero_app_secret  (optional)
# @param string $x_embarcadero_master_secret  (optional)
{
    my $params = {
    'x_embarcadero_application_id' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    'x_embarcadero_app_secret' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    'x_embarcadero_master_secret' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    };
    __PACKAGE__->method_documentation->{ 'get_apiyaml_format' } = { 
    	summary => 'Get YAML',
        params => $params,
        returns => undef,
        };
}
# @return void
#
sub get_apiyaml_format {
    my ($self, %args) = @_;

    # parse inputs
    my $_resource_path = '/api/apidoc.yaml';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept();
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type();

    # header params
    if ( exists $args{'x_embarcadero_application_id'}) {
        $header_params->{'X-Embarcadero-Application-Id'} = $self->{api_client}->to_header_value($args{'x_embarcadero_application_id'});
    }

    # header params
    if ( exists $args{'x_embarcadero_app_secret'}) {
        $header_params->{'X-Embarcadero-App-Secret'} = $self->{api_client}->to_header_value($args{'x_embarcadero_app_secret'});
    }

    # header params
    if ( exists $args{'x_embarcadero_master_secret'}) {
        $header_params->{'X-Embarcadero-Master-Secret'} = $self->{api_client}->to_header_value($args{'x_embarcadero_master_secret'});
    }

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    return;
}

#
# get_apiyaml_format_end_point
#
# Get API EndPoint
# 
# @param string $item Path Segment to an EndPoint (required)
# @param string $x_embarcadero_application_id  (optional)
# @param string $x_embarcadero_app_secret  (optional)
# @param string $x_embarcadero_master_secret  (optional)
{
    my $params = {
    'item' => {
        data_type => 'string',
        description => 'Path Segment to an EndPoint',
        required => '1',
    },
    'x_embarcadero_application_id' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    'x_embarcadero_app_secret' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    'x_embarcadero_master_secret' => {
        data_type => 'string',
        description => '',
        required => '0',
    },
    };
    __PACKAGE__->method_documentation->{ 'get_apiyaml_format_end_point' } = { 
    	summary => 'Get API EndPoint',
        params => $params,
        returns => undef,
        };
}
# @return void
#
sub get_apiyaml_format_end_point {
    my ($self, %args) = @_;

    # verify the required parameter 'item' is set
    unless (exists $args{'item'}) {
      croak("Missing the required parameter 'item' when calling get_apiyaml_format_end_point");
    }

    # parse inputs
    my $_resource_path = '/api/{item}/apidoc.yaml';

    my $_method = 'GET';
    my $query_params = {};
    my $header_params = {};
    my $form_params = {};

    # 'Accept' and 'Content-Type' header
    my $_header_accept = $self->{api_client}->select_header_accept('application/json');
    if ($_header_accept) {
        $header_params->{'Accept'} = $_header_accept;
    }
    $header_params->{'Content-Type'} = $self->{api_client}->select_header_content_type();

    # header params
    if ( exists $args{'x_embarcadero_application_id'}) {
        $header_params->{'X-Embarcadero-Application-Id'} = $self->{api_client}->to_header_value($args{'x_embarcadero_application_id'});
    }

    # header params
    if ( exists $args{'x_embarcadero_app_secret'}) {
        $header_params->{'X-Embarcadero-App-Secret'} = $self->{api_client}->to_header_value($args{'x_embarcadero_app_secret'});
    }

    # header params
    if ( exists $args{'x_embarcadero_master_secret'}) {
        $header_params->{'X-Embarcadero-Master-Secret'} = $self->{api_client}->to_header_value($args{'x_embarcadero_master_secret'});
    }

    # path params
    if ( exists $args{'item'}) {
        my $_base_variable = "{" . "item" . "}";
        my $_base_value = $self->{api_client}->to_path_value($args{'item'});
        $_resource_path =~ s/$_base_variable/$_base_value/g;
    }

    my $_body_data;
    # authentication setting, if any
    my $auth_settings = [qw()];

    # make the API Call
    $self->{api_client}->call_api($_resource_path, $_method,
                                           $query_params, $form_params,
                                           $header_params, $_body_data, $auth_settings);
    return;
}

1;
