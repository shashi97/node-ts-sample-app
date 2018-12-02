import * as express from 'express';
import L from '../logger';
class UserController {
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
        let test = [
            {
              "_id": "5a7483a9a51acd00387623bc",
              "groupname": "GG_ITSS_Security_Awareness",
              "imgUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABECAMAAAAhiEISAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAKVQTFRF+/v7+s6y+/f1+Xkn+Xck+/f0+rOF+WMC+rSG+urg+WoO+pla+ppb+9jB+WQD+9W9+/n4+X8x+7yU+72V+/Dp+W8W+W4U++/n+aFo+aJp+9/M+WUF+/r6+YlA+YY8+sSi+sWj+/Tv+nQd+qp3+qt4++fZ+WcJ+WcI++XW+pBL+Yc9+YM3+pZV+sSh++/o+W8V+76X+/Hq+riN++fa+X0t+oxE////J6hAuwAAAAFiS0dENke/iNEAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAHTSURBVFjDrdZXW8JAEIVhAsoIKM2GgFItASki/v+/JoS22ZzZzJZzGZLvjveZQkG2KBK+KFyxdHUdNFgmugnZq1SJqpWAwRrtdhuud1ffB+uNUL1mi5K1moGCbTruPkzv4fEUfHoOEuzQeS8het3eJdjr+vf6r6Tsre8dHFBqQ9/eaJwOjkeewQlpm/r13j/04OeXVzCmzGKfXkRgHtQWSyjoQW2Z4Jyp3bOK5kxtjZg5UntgFc2N2hOraE7UtskwB2ovrKI5UNsh46ypVVlFs6W2P1O/nn8nm6vPZnbUplldHB4uUg+HNj2NVRi0olZjFQZtqNVZxUELanVWcVBObYZVJiilNssqFxRSm2WVC8qoBayyQRG1gFU2KKEWscoH86mFrPLBfGohq4ZgHrXLFfpo/ZNsjX5bLY3BHFbRjNTmsYpmojZ9rUpnuGoHLj0Dtfq1Kh1L7cStx1KbvValY6iN2Q82v8k27AuQ2oh93fhPOQxQi69VaRBQWyafYJZa7lqVBjPU1sgvqFPLX6vSYJpa07W62/Yv2db4Uopa47UqnUKt+VqVTrlqHVhFO1PrwiraiVo3VtGO1Dqyijb0YRUtodaZVbSpD6toO2pj/4q6+B+NgGEk+K8t4QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMS0wM1QwOTo1ODoyNi0wNzowMLJ+QtgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDEtMDNUMDk6NTg6MjYtMDc6MDDDI/pkAAAAU3RFWHRzdmc6YmFzZS11cmkAZmlsZTovLy92YXIvd3d3L2h0bWwvdXBsb2FkL2JjMjA3NDQ5YjRlM2MyNGJiNmM4NDFmZmQ5YmQ5NzhlL2lucHV0LnN2Z5dojKYAAAAASUVORK5CYII=",
              "templeteType": "box-1",
              "title": "Awareness",
              "description": "Services to identify risk and provide awareness",
              "__v": 0,
              "addDate": "2018-02-22T20:23:11.248Z",
              "boxMenu": [
                {
                  "routerLink": "awareness",
                  "description": "Protecting electronic communications",
                  "title": "Awareness",
                  "icon": "fa-globe",
                  "_id": "5a5fb1319c9dc80038836f3f",
                  "serviceformStatus": false,
                  "serviceformId": "5a5fb1319c9dc80038836f3f"
                }
              ],
              "position": 1
            },
            {
              "_id": "5a7483a9a51acd00387623b4",
              "groupname": "GG_ITSS_ Capability_Product_Security",
              "imgUrl": "/assets/svg/product-security-org.svg",
              "templeteType": "box-1",
              "title": "Product Security",
              "description": "Services to identify and remediate application vulnerabilities",
              "__v": 0,
              "addDate": "2017-12-20T14:49:35.431Z",
              "boxMenu": [
                {
                  "icon": "fa-globe",
                  "title": "Application Security",
                  "description": "Request application security testing",
                  "routerLink": "applicationsecurity",
                  "_id": "5a3a787f7f350b003753e4b4",
                  "serviceformStatus": false,
                  "serviceformId": "5a3a787f7f350b003753e4b4"
                },
                {
                  "icon": "fa-globe",
                  "title": "Vulnerability Management",
                  "description": "Application vulnerability remediation consulting",
                  "routerLink": "vulnerabilitymanagement",
                  "_id": "5a3a787f7f350b003753e4b3"
                }
              ],
              "position": 2
            },
            {
              "_id": "5a7483a9a51acd00387623b5",
              "groupname": "GG_ITSS_Capability_Identity_Access_Management",
              "imgUrl": "/assets/svg/data-security-org.svg",
              "templeteType": "box-0",
              "title": "Identity & Access Management",
              "description": "Services ensure only authorized individuals have access",
              "__v": 0,
              "addDate": "2018-02-15T20:58:44.763Z",
              "boxMenu": [
                {
                  "serviceformStatus": true,
                  "routerLink": "arp",
                  "description": "Request access / view your current access to systems",
                  "title": "Access Request Portal (ARP)",
                  "icon": "fa-globe",
                  "_id": "5a135cf3578d6800350a1938",
                  "serviceformId": "5a135cf3578d6800350a1938"
                },
                {
                  "serviceformStatus": false,
                  "routerLink": "twofa",
                  "description": "Request an RSA Two-Factor Token",
                  "title": "Two-Factor Authentication",
                  "icon": "fa-file",
                  "_id": "5a135cf3578d6800350a1937"
                },
                {
                  "serviceformStatus": false,
                  "routerLink": "SAFE",
                  "description": "Request for Security Access",
                  "title": "Secure Access For End-Users (SAFE)",
                  "icon": "fa-question-circle",
                  "_id": "5a135cf3578d6800350a1936"
                },
                {
                  "serviceformStatus": false,
                  "routerLink": "iamaudit",
                  "description": "Request audit evidence",
                  "title": "IAM Audit Support",
                  "icon": "fa-shield",
                  "_id": "5a135cf3578d6800350a1935"
                },
                {
                  "serviceformStatus": false,
                  "routerLink": "privileged",
                  "description": "Manage privileged user account access",
                  "title": "Privileged Identity Management",
                  "icon": "fa-users",
                  "_id": "5a135cf3578d6800350a1934"
                },
                {
                  "serviceformStatus": true,
                  "routerLink": "singlesignon",
                  "description": "Request application single sign-on",
                  "title": "Single Sign-On",
                  "icon": "fa-check-circle-o",
                  "_id": "5a135cf3578d6800350a1933",
                  "serviceformId": "5a135cf3578d6800350a1933"
                },
                {
                  "serviceformStatus": true,
                  "routerLink": "iam",
                  "description": "Request changes to ARP data ownership / certifier / access groups",
                  "title": "IAM Service Catalog Request",
                  "icon": "fa-database",
                  "_id": "5a135cf3578d6800350a1932",
                  "serviceformId": "5a135cf3578d6800350a1932"
                },
                {
                  "serviceformStatus": false,
                  "routerLink": "certifi",
                  "description": "Manage / Identify SMEs for application access validation",
                  "title": "CERTIFi Access Certification",
                  "icon": "fa-certificate",
                  "_id": "5a135cf3578d6800350a1931",
                  "serviceformId": "5a135cf3578d6800350a1931"
                },
                {
                  "serviceformStatus": false,
                  "routerLink": "apigateway",
                  "description": "API Gateway",
                  "title": "API Gateway",
                  "icon": "fa-globe",
                  "_id": "5a135cf3578d6800350a1930",
                  "serviceformId": "5a135cf3578d6800350a1930"
                },
                {
                  "serviceformStatus": true,
                  "routerLink": "RBAC",
                  "description": "Provide role-based access",
                  "title": "Role Based Access Control (RBAC)",
                  "icon": "fa-globe",
                  "_id": "5a85e0ec69a42c003ae13da8",
                  "serviceformId": "5a85e0ec69a42c003ae13da8"
                }
              ],
              "position": 3
            },
            {
              "_id": "5a7483a9a51acd00387623b6",
              "groupname": "GG_ITSS_ Capability_Data_Security",
              "imgUrl": "/assets/svg/identity-access-management-org.svg",
              "templeteType": "box-1",
              "title": "Data Security",
              "description": "Services monitor and protect sensitive data-at-rest and data-in-transit",
              "__v": 0,
              "addDate": "2018-01-31T18:53:52.028Z",
              "boxMenu": [
                {
                  "_id": "5a397acd7f350b003753e4ac",
                  "icon": "fa-certificate",
                  "title": "Certificate Provisioning",
                  "description": "Request digital certificates",
                  "routerLink": "certificate"
                },
                {
                  "_id": "5a397acd7f350b003753e4ab",
                  "icon": "fa-globe",
                  "title": "Data Loss Prevention",
                  "description": "Monitor, detect & quarantine sensitive data",
                  "routerLink": "datalossprevention"
                },
                {
                  "_id": "5a397acd7f350b003753e4aa",
                  "icon": "fa-globe",
                  "title": "Database Access Monitoring ",
                  "description": "Monitor sensitive database access ",
                  "routerLink": "dam"
                },
                {
                  "_id": "5a397acd7f350b003753e4a9",
                  "icon": "fa-globe",
                  "title": "Data Encryption",
                  "description": "Encrypt sensitive data-at-rest",
                  "routerLink": "encryption",
                  "serviceformStatus": false,
                  "serviceformId": "5a397acd7f350b003753e4a9"
                }
              ],
              "position": 4
            },
            {
              "_id": "5a7483a9a51acd00387623b7",
              "groupname": "GG_ITSS_ Capability_Network_Security",
              "imgUrl": "/assets/svg/network-security-org.svg",
              "templeteType": "box-1",
              "title": "Network Security",
              "description": "Services that monitor and protect our network",
              "__v": 0,
              "addDate": "2018-02-16T19:30:59.893Z",
              "boxMenu": [
                {
                  "routerLink": "firewall",
                  "description": "Request a firewall change for corp or store",
                  "title": "Firewall",
                  "icon": "fa-shield",
                  "_id": "5a0ef8b0e0ab630035fa3c46"
                },
                {
                  "routerLink": "webproxy",
                  "description": "Request a Web Proxy Gateway",
                  "title": "Web Proxy",
                  "icon": "fa-globe",
                  "_id": "5a0ef8b0e0ab630035fa3c45"
                },
                {
                  "routerLink": "asa",
                  "description": "Request an Architecture Security Assessment ",
                  "title": "Architecture Security Assessment",
                  "icon": "fa-globe",
                  "_id": "5a0ef8b0e0ab630035fa3c44"
                },
                {
                  "routerLink": "segmentation",
                  "description": "Request a subnetwork",
                  "title": "Network Segmentation",
                  "icon": "fa-globe",
                  "_id": "5a0ef8b0e0ab630035fa3c43"
                },
                {
                  "_id": "5a87317338ec1d0038d760d9",
                  "routerLink": "networkaccesscontrol",
                  "description": "Request NAC or Whitelisting ",
                  "title": "Network Access Control (NAC)",
                  "icon": "fa-globe"
                }
              ],
              "position": 5
            },
            {
              "_id": "5a7483a9a51acd00387623b8",
              "groupname": "GG_ITSS_ Capability_Cloud_Security",
              "imgUrl": "/assets/svg/cloud-security-org.svg",
              "templeteType": "box-1",
              "title": "Cloud Security",
              "description": "Services to access, monitor and protect our data hosted in the cloud",
              "__v": 0,
              "addDate": "2017-11-22T15:20:06.794Z",
              "boxMenu": [
                {
                  "_id": "5a15cd41ed1d6e0038f9dd70",
                  "routerLink": "ecarp",
                  "description": "Request Bastion Server access, Manage Cloud Firewall Rules, Manage Service Accounts",
                  "title": "Enterprise Cloud Access Request Portal",
                  "icon": "fa-check-circle",
                  "serviceformStatus": false,
                  "serviceformId": "5a15cd41ed1d6e0038f9dd70"
                }
              ],
              "position": 6
            },
            {
              "_id": "5a7483a9a51acd00387623b9",
              "groupname": "GG_ITSS_ Capability_End_Point_Protection",
              "templeteType": "box-1",
              "imgUrl": "/assets/svg/endpoint-protection-org.svg",
              "title": "Endpoint Protection",
              "description": "Services to protect endpoints against malware",
              "__v": 0,
              "addDate": "2018-08-15T19:42:47.307Z",
              "boxMenu": [
                {
                  "serviceformStatus": false,
                  "_id": "59f8902d894bd800346a935f",
                  "icon": "fa-globe",
                  "title": "Antivirus (AV) Exclusion – Exception Request",
                  "description": "Request exception for Anti- Virus software requirement",
                  "routerLink": "avexclusion"
                },
                {
                  "serviceformStatus": false,
                  "icon": "fa-globe",
                  "title": "Cloud & Web Services Access",
                  "description": "Request exception for Cloud & Web Services Access",
                  "routerLink": "cloudexclusion",
                  "_id": "5b748237d42d51003cff2406"
                }
              ],
              "position": 7
            },
            {
              "_id": "5a7483a9a51acd00387623ba",
              "groupname": "GG_ITSS_ Affiliates",
              "imgUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxM0U5OEYwNEM3NjcxMUU3OTJFOURDOTM1MDBFMDlBOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxM0U5OEYwNUM3NjcxMUU3OTJFOURDOTM1MDBFMDlBOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzRTk4RjAyQzc2NzExRTc5MkU5REM5MzUwMEUwOUE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzRTk4RjAzQzc2NzExRTc5MkU5REM5MzUwMEUwOUE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bakhrwAAHI9JREFUeNrMXAd8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",
              "templeteType": "box-1",
              "title": "Operating Units",
              "description": "Provide security related services to THD operating units",
              "__v": 0,
              "addDate": "2018-02-19T22:05:44.827Z",
              "boxMenu": [
                {
                  "_id": "5a54dbe59c9dc80038836e3c",
                  "icon": "fa-globe",
                  "title": "Our Operating Units",
                  "description": "Learn about our operating units",
                  "routerLink": "operatingunits"
                }
              ],
              "position": 8
            },
            {
              "_id": "5a7483a9a51acd00387623bb",
              "groupname": "GG_ITSS_ Business_Resiliency",
              "imgUrl": "/assets/svg/data-security-org.svg",
              "templeteType": "box-1",
              "title": "Governance & Business Continuity",
              "description": "Services provide governance and business continuity",
              "__v": 0,
              "addDate": "2018-01-22T14:43:45.459Z",
              "boxMenu": [
                {
                  "_id": "5a5fab608bc00f00380e944a",
                  "icon": "fa-globe",
                  "title": "Findings Management",
                  "description": "Manage findings",
                  "routerLink": "findingsmgmt"
                }
              ],
              "position": 9
            },
            {
              "_id": "5a7483a9a51acd00387623be",
              "groupname": "GG_ITSS_ Capability_Security_Operations",
              "imgUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxM0U5OEYwMEM3NjcxMUU3OTJFOURDOTM1MDBFMDlBOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxM0U5OEYwMUM3NjcxMUU3OTJFOURDOTM1MDBFMDlBOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzRTk4RUZFQzc2NzExRTc5MkU5REM5MzUwMEUwOUE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzRTk4RUZGQzc2NzExRTc5MkU5REM5MzUwMEUwOUE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wfMzwQAAB6dJREFUeNrsXWls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",
              "templeteType": "coming-soon-img",
              "title": "Security Operations",
              "description": "Provide operational support of security services, tools, and capabilities",
              "__v": 0,
              "addDate": "2018-01-29T19:51:21.372Z",
              "boxMenu": [
                {
                  "_id": "5a60fb459c9dc80038836f6f",
                  "icon": "fa-globe",
                  "title": "Network Security",
                  "description": "",
                  "routerLink": "network"
                },
                {
                  "_id": "5a60fb459c9dc80038836f6e",
                  "icon": "fa-globe",
                  "title": "End Point Security",
                  "description": "",
                  "routerLink": "endpointprotection"
                },
                {
                  "_id": "5a60fb459c9dc80038836f6d",
                  "icon": "fa-cog",
                  "title": "Privileged Access Management",
                  "description": "Manage privileged user account access",
                  "routerLink": "PAM"
                }
              ],
              "position": 11
            }
          ];
          res.send(test);
    }

   
}

export default new UserController();
