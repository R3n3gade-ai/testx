/** Copyright ©2025 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{parseTimezones}from'./timezone.model';import{expose}from'comlink';const timezonesWorker={'parseTimezones'(a){return{'tzData':parseTimezones(a),'timezones':a};}};expose(timezonesWorker);