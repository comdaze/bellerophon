/**
 * Created by arminhammer on 11/24/15.
 */

var m = require('mithril');

var Resource = function() {

	var ResourceBase = function() {
		var self = this;
		self.inTemplate = m.prop(false);

	};

	var AWS_EC2_VPC = function(name, body) {
		ResourceBase.call(this);
		var self = this;
		self.id = name;
		self.name = name + '-resource';
		self.body = body;
		self.block = {
			"Type" : "AWS::EC2::VPC",
			"Properties" : {
				"CidrBlock" : "String",
				"EnableDnsSupport" : "Boolean",
				"EnableDnsHostnames" : "Boolean",
				"InstanceTenancy" : "String",
				"Tags" : []
			}
		};
	};
	AWS_EC2_VPC.prototype = Object.create(ResourceBase.prototype);

	var AWS_EC2_SUBNET = function(name, body) {
		ResourceBase.call(this);
		var self = this;
		self.id = name;
		self.name = name + '-resource';
		self.body = body;
		self.block = {
			"Type" : "AWS::EC2::Subnet",
			"Properties" : {
				"AvailabilityZone": "String",
				"CidrBlock": "String",
				"MapPublicIpOnLaunch": "Boolean",
				"Tags": [],
				"VpcId": {"Ref": "String"}

			}
		};
	};
	AWS_EC2_SUBNET.prototype = Object.create(ResourceBase.prototype);


	return {
		AWS_EC2_VPC: AWS_EC2_VPC,
		AWS_EC2_SUBNET: AWS_EC2_SUBNET
	}

};

module.exports = Resource;