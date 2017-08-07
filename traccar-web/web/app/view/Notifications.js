/*
 * Copyright 2016 Anton Tananaev (anton@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.Notifications', {
    extend: 'Ext.grid.Panel',
    xtype: 'notificationsView',

    requires: [
        'Traccar.view.NotificationsController'
    ],

    controller: 'notificationsController',
    store: 'Notifications',

    selModel: {
        selType: 'cellmodel'
    },

    viewConfig: {
        markDirty: false
    },

    columns: {
        defaults: {
            flex: 1,
            minWidth: Traccar.Style.columnWidthNormal
        },
        items: [{
            text: Strings.notificationType,
            dataIndex: 'type',
            flex: 2,
            renderer: function (value) {
                return Traccar.app.getEventString(value);
            }
        }, {
            text: Strings.notificationWeb,
            dataIndex: 'web',
            xtype: 'checkcolumn',
            listeners: {
                checkChange: 'onCheckChange'
            }
        }, {
            text: Strings.notificationMail,
            dataIndex: 'mail',
            xtype: 'checkcolumn',
            listeners: {
                checkChange: 'onCheckChange'
            }
        }, {
            text: Strings.notificationSms,
            dataIndex: 'sms',
            xtype: 'checkcolumn',
            listeners: {
                checkChange: 'onCheckChange'
            }
        }]
    }
});
