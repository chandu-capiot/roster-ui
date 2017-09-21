import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Data } from '@angular/router';
import { AfterContentInit, Component, group, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import '../../node_modules/fullcalendar/dist/fullcalendar';
import '../../node_modules/fullcalendar-scheduler/dist/scheduler';

// declare var $: any;
// declare var moment: any;
declare var fullCalendar: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  options: any;

  ngOnInit() {
    $('#calendar').fullCalendar (this.initiateCalender());
   }

  ngAfterContentInit() {

  }

  initiateCalender () {
    const _self = this;
    let isDivider: any = false;

    return this.options = {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      now: new Date(),
      slotLabelFormat : 'D',
      editable: true,
      aspectRatio: 1.8,
      resourceAreaWidth: '25%',
      scrollTime: '00:00',
      header: {
        left: 'projects,teams',
        center: '',
        right: 'zoomOut,zoomIn prev,timeline2Weeks,next'
      },
      defaultView: 'timeline2Weeks',
      views: {
        timelineTwoMonths: {
          type: 'timeline',
          duration: {
            weeks: 1
          }
        },
        timeline2Weeks: {
            type: 'timeline',
            duration: { weeks: 3 },
            slotDuration: '24:00',
            buttonText: 'Week'
        },
        timeline5Weeks: {
          type: 'timeline',
          duration: { weeks: 6 },
          slotDuration: '24:00',
          buttonText: 'Week'
        }
      },
      customButtons: {
        projects: {
          text: 'Projects',
          click: function() {
            // alert('Project details!');
          }
        },
        teams: {
          text: 'Teams',
          click: function() {
            // $('#calender').fullCalendar('changeView', 'timeline2Weeks');
          }
        },
        themeSystem: 'bootstrap3',
        bootstrapGlyphicons : {
            close: 'glyphicon-remove',
            prev: 'glyphicon-chevron-left',
            next: 'glyphicon-chevron-right',
            prevYear: 'glyphicon-backward',
            nextYear: 'glyphicon-forward'
        },
        zoomOut: {
          text: '-',
          click: function() {
            $('#calendar').fullCalendar('changeView', 'timeline5Weeks');
            $('.fc-zoomOut-button').addClass('fc-state-disabled');
            $('.fc-zoomIn-button').removeClass('fc-state-disabled');
          },
          bootstrapGlyphicon : 'glyphicon-zoom-in'
        },
        zoomIn: {
          text: '+',
          click: function() {
            $('#calendar').fullCalendar('changeView', 'timeline2Weeks');
            $('.fc-zoomOut-button').removeClass('fc-state-disabled');
            $('.fc-zoomIn-button').addClass('fc-state-disabled');
          }
        }
      },
      filterResourcesWithEvents: false,
      resourceGroupField: 'building',
      resources: [
        {
          id: '1', building: 'Goodwin A', title: 'URC 18394B', name: 'Deck Backfill',
          subTitle: 'Woodside Energy',
          className: 'blue',
          children: [
            { id: 'a', title: 'Electrician', name: 'Phoebe Thompson', className: 'offered' },
            { id: 'b', title: 'Electrician', name: 'Herbert Reed', className: 'accepted' },
          ]
        },
        {
          id: '2', building: 'Goodwin A', title: 'URC 18394B', name: 'Maintenance Campaign',
          subTitle: 'Woodside Energy',
          className: 'blue',
          children: [
            { id: 'a', title: 'Electrician', name: 'Phoebe Thompson', className: 'offered' },
            { id: 'b', title: 'Electrician', name: 'Herbert Reed', className: 'accepted' },
            { id: 'c', title: 'Rigger Adv.', name: 'Zachary Montgomery', className: 'declined' },
            { id: 'd', title: 'Rigger Adv.', name: 'Elijah Lopez', className: 'accepted' },
            { id: 'e', title: 'Mechanical', name: 'Francisco Bell', className: 'accepted' },
          ]
        },
        {
          id: '3',
          building: 'Goodwin B',
          title: 'URC 18394B',
          name: 'Maintenance Campaign',
          subTitle: 'Woodside Energy',
          className: 'orange',
          children: [
            { id: 'f', title: 'Electrician', name: 'Phoebe Thompson', className: 'offered' },
            { id: 'g', title: 'Electrician', name: 'Herbert Reed', className: 'accepted' },
            { id: 'i', title: 'Rigger Adv.', name: 'Zachary Montgomery', className: 'declined' },
            { id: 'j', title: 'Rigger Adv.', name: 'Elijah Lopez', className: 'accepted' },
            { id: 'k', title: 'Mechanical', name: 'Francisco Bell', className: 'accepted' },
          ]
        }
      ],
      events: [
				{ id: '1', resourceId: 'a', start: '2017-09-07T02:00:00', end: '2017-09-07T07:00:00', title: 'Offered', className: 'offered' },
				{ id: '2', resourceId: 'b', start: '2017-09-07T05:00:00', end: '2017-09-07T22:00:00', title: 'Accepted', className: 'accepted'},
				{ id: '3', resourceId: 'c', start: '2017-09-06', end: '2017-09-08', title: 'Declined', className: 'declined'  },
				{ id: '4', resourceId: 'd', start: '2017-09-07T03:00:00', end: '2017-09-07T08:00:00', title: 'Accepted', className: 'accepted'},
				{ id: '5', resourceId: 'e', start: '2017-09-07T00:30:00', end: '2017-09-07T02:30:00', title: 'Accepted', className: 'accepted'}
      ],
      eventRender: function (event, element, view) {
        const eventHTML = '<div class="fc-content event-title">' +
                      '<span class="fc-title-icon">' + event.title + '</span>' +
                     '</div>' +
                     '<div class="fc-bg"></div>' +
                     '<div class="fc-resizer fc-start-resizer"></div>' +
                     '<div class="fc-resizer fc-end-resizer"></div>';
        $(element).html(eventHTML);
      },
      eventAfterAllRender: function(view) {
        $('.fc-event-container a').addClass('event-status');
      },
      resourceColumns: [
          {
              labelText: 'Search for projects, clients or tags...',
              field: 'title',
              render: function (resource, el) {
              }
          }
      ],
      viewRender: function (view, element) {
        _self.renderSearchHTML();
        const startDate = $('#calendar').fullCalendar('getView').start;

        if (view.currentRangeUnit === 'week') {
          const colspanCount = $('.fc-head .fc-time-area .fc-content table tbody tr th').length;
          const row = $('<tr></tr>');
          let currentWeek: any = '';
          for (let i = 1, colspan = 7; i <= colspanCount / 7; i++) {
            const weekStartDate = startDate.clone().add((colspan * (i - 1)), 'days');
            const WeekEndDate = startDate.clone().add((colspan * i) - 1, 'days');
            currentWeek = '';
            if (weekStartDate.format('w') === moment(new Date()).format('w')) {
              currentWeek = '<hr class="current-week"/>';
            }
            row.append('<th colspan="' + colspan + '">' + currentWeek + _self.getWeekStr(weekStartDate, WeekEndDate) + ' </th>');
          }

          $('.fc-head .fc-time-area colgroup').next().prepend(row);
        }

        $('i.arrow').on('click', function(){
          $(this).toggleClass('down up');
          const rowObj = $(this).closest('tr');
          const currentRowIndex = rowObj.index();
          if ($('.fc-body .fc-resource-area tr:eq(' + currentRowIndex + ') td').hasClass('fc-divider')) {
            isDivider = true;
          } else {
            isDivider = false;
          }

          if ($(this).hasClass('down')) {
            _self.collapseResource(rowObj, currentRowIndex, isDivider);
          }else {
            _self.expandResource(rowObj, currentRowIndex, isDivider);
          }
        });
      },
      resourceRender: function(resourceObj, resourceTds, bodyTds) {
          let resourceHTML: string;

          if (resourceObj.children.length) {
            _self.renderResourceProjectDivider(resourceObj, resourceTds, bodyTds);
            resourceHTML = _self.getResourceParentDOM(resourceObj);
          } else {
            resourceHTML = _self.getResourceChildrenDOM(resourceObj);
          }
        $(resourceTds).html(resourceHTML);
      }
    };
  }

  renderSearchHTML() {
    const searchHTML = '<div class="container">' +
        '<div class="row">' +
          '<div class="col-md-12">' +
            '<i class="fa fa-search fa-3"></i>' +
            '<input type="text" class="resource-search" placeholder="Search for projects, clients or tags..." id="resource-search-name"/>' +
          '</div>' +
        '</div>' +
    '</div>';

    $('.fc-resource-area .fc-widget-header').html(searchHTML);
  }
  getResourceParentDOM(resourceObj) {
    const resourceHTML =  '<div class="container resource-level-2 ' + resourceObj.className + '">' +
                            '<div class="fc-cell-content row">' +
                                '<div class="fc-cell-text col-md-11">' +
                                    '<div class="resource-title">' + resourceObj.title + '</div>' +
                                    '<div class="resource-name">' + resourceObj.name + '</div>' +
                                '</div>' +
                                '<div class="col-md-1"><i class="arrow up"></i></div>' +
                            '</div>' +
                          '</div>';

    return resourceHTML;
  }

  getResourceChildrenDOM(resourceObj) {
    const resourceHTML =  '<div class="container resource-level-3">' +
                            '<div class="fc-cell-content row">' +
                                '<div class="fc-cell-text col-md-3 resource-title">' + resourceObj.title + '</div>' +
                                '<div class="fc-cell-text col-md-9 text-right resource-name">' + resourceObj.name + '</div>' +
                            '</div>' +
                          '</div>';
    return resourceHTML;
  }

  renderResourceProjectDivider (resourceObj, resourceTds, bodyTds) {
    const dividerResourceElementObj = $(resourceTds).closest('tr').prev();
    const dividerTimeAreaEleObj = $(bodyTds).closest('tr').prev();
    const dividerResourceText = dividerResourceElementObj.find('td.fc-divider span.fc-cell-text').text();

    if (dividerResourceText !== '' ) {
      const dividerHTML = '<div class="container resource-level-1">' +
                            '<div class="fc-cell-content row">' +
                                '<div class="fc-cell-text col-md-11">' +
                                    '<div class="resource-title"> Woodside Energy </div>' +
                                    '<div class="resource-name">' + dividerResourceText + '</div>' +
                                '</div>' +
                                '<div class="col-md-1"><i class="arrow up"></i></div>' +
                            '</div>' +
                          '</div>';
      dividerResourceElementObj.find('td.fc-divider').html(dividerHTML);
    }

    dividerResourceElementObj.find('td.fc-divider').addClass(resourceObj.className);
    dividerTimeAreaEleObj.find('td.fc-divider').addClass(resourceObj.className);

    return;
  }
  collapseResource (rowObj, currentRowIndex, isDivider) {
    for (let i = currentRowIndex + 1; i < rowObj.siblings().length + 1; i++) {
      if (isDivider === true && $('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider') ) {
        break;
      }

      if (!isDivider && ($('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider') ||
        ($('.fc-body .fc-resource-area tr:eq(' + i + ') td div').hasClass('resource-level-2')))) {
        break;
      }

      $('.fc-body .fc-resource-area tr:eq(' + i + ')').hide();
      $('.fc-body .fc-time-area tr:eq(' + i + ')').hide();
    }
  }

  expandResource (rowObj, currentRowIndex, isDivider) {
    for (let i = currentRowIndex + 1; i < rowObj.siblings().length + 1; i++) {
      if (isDivider === true && $('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider') ) {
        break;
      }

      if (!isDivider && ($('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider') ||
        ($('.fc-body .fc-resource-area tr:eq(' + i + ') td div').hasClass('resource-level-2')))) {
        break;
      }

      $('.fc-body .fc-resource-area tr:eq(' + i + ')').show();
      $('.fc-body .fc-time-area tr:eq(' + i + ')').show();
    }
  }

  getWeekStr (startDate, endDate) {
    const startDateStr = startDate.format('D');
    const endDateStr = endDate.format('D');
    let weekStr = startDate.format('D');
    if (endDate.format('MMM') !== startDate.format('MMM')) {
      weekStr += ' ' + startDate.format('MMM');
    }
    weekStr += ' - ' + endDate.format('D') + ' ' + endDate.format('MMM');

    return weekStr;
  }
}
