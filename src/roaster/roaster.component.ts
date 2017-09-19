import { Component, OnInit, AfterContentInit, ViewEncapsulation } from '@angular/core';

declare var $: any;
declare var moment: any;
declare var fullCalendar: any;

@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoasterComponent implements OnInit, AfterContentInit {
  options: any;

  ngOnInit() { }

  ngAfterContentInit() {
    this.initiateCalender();
    $('#roaster-calendar').fullCalendar(this.options);
  }

  initiateCalender() {
    const _self = this;
    let isDivider: any = false;

    return this.options = {
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      now: '2017-09-07',
      editable: true,
      aspectRatio: 1.8,
      resourceAreaWidth: '25%',
      scrollTime: '00:00',
      header: {
        left: 'projects,teams',
        center: '',
        right: 'zoomOut,zoomIn prev,agendaTwoWeek,next'
      },
      defaultView: 'timelineTwoMonths',
      views: {
        timelineTwoMonths: {
          type: 'timeline',
          duration: {
            weeks: 1
          }
        },
        agendaTwoWeek: {
          type: 'timeline',
          duration: { weeks: 1 },
          slotDuration: '24:00',
          buttonText: 'Week'
        }
      },
      customButtons: {
        projects: {
          text: 'Projects',
          click: function () {
            alert('Project details!');
          }
        },
        teams: {
          text: 'Teams',
          click: function () {
            alert('Team details!');
          }
        },
        zoomOut: {
          text: '-',
          click: function () {
            // alert('Project details!');
          },
          visibleRange: function (currentDate) {
            return {
              start: currentDate.clone().subtract(1, 'weeks'),
              end: currentDate.clone().add(2, 'weeks') // exclusive end, so 3
            };
          }
        },
        zoomIn: {
          text: '+',
          click: function () {
            // alert('Project details!');
          },
          visibleRange: function (currentDate) {
            return {
              start: currentDate.clone().subtract(1, 'days'),
              end: currentDate.clone().subtract(7, 'days') // exclusive end, so 3
            };
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
        { id: '2', resourceId: 'b', start: '2017-09-07T05:00:00', end: '2017-09-07T22:00:00', title: 'Accepted', className: 'accepted' },
        { id: '3', resourceId: 'c', start: '2017-09-06', end: '2017-09-08', title: 'Declined', className: 'declined' },
        { id: '4', resourceId: 'd', start: '2017-09-07T03:00:00', end: '2017-09-07T08:00:00', title: 'Accepted', className: 'accepted' },
        { id: '5', resourceId: 'e', start: '2017-09-07T00:30:00', end: '2017-09-07T02:30:00', title: 'Accepted', className: 'accepted' }
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
      eventAfterAllRender: function (view) {
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
        const searchHTML = '<div class="container">' +
          '<div class="row">' +
          '<div class="col-md-12">' +
          '<i class="fa fa-search fa-3"></i>' +
          '<input type="text" class="resource-search" placeholder="' + $('.fc-resource-area .fc-widget-header span.fc-cell-text').html() +
          '" id="resource-search-name"/>' +
          '</div>' +
          '</div>' +
          '</div>';

        $('.fc-resource-area .fc-widget-header').html(searchHTML);
        $('i.arrow').on('click', function () {
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
          } else {
            _self.expandResource(rowObj, currentRowIndex, isDivider);
          }
        });
      },
      resourceRender: function (resourceObj, resourceTds, bodyTds) {
        let resourceHTML: string;

        if (resourceObj.children.length) {
          const dividerResourceElementObj = $(resourceTds).closest('tr').prev();
          const dividerTimeAreaEleObj = $(bodyTds).closest('tr').prev();
          const dividerResourceText = dividerResourceElementObj.find('td.fc-divider span.fc-cell-text').text();

          if (dividerResourceText !== '') {
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

          resourceHTML = '<div class="container resource-level-2 ' + resourceObj.className + '">' +
            '<div class="fc-cell-content row">' +
            '<div class="fc-cell-text col-md-11">' +
            '<div class="resource-title">' + resourceObj.title + '</div>' +
            '<div class="resource-name">' + resourceObj.name + '</div>' +
            '</div>' +
            '<div class="col-md-1"><i class="arrow up"></i></div>' +
            '</div>' +
            '</div>';
        } else {
          resourceHTML = '<div class="container resource-level-3">' +
            '<div class="fc-cell-content row">' +
            '<div class="fc-cell-text col-md-3 resource-title">' + resourceObj.title + '</div>' +
            '<div class="fc-cell-text col-md-9 text-right resource-name">' + resourceObj.name + '</div>' +
            '</div>' +
            '</div>';
        }
        $(resourceTds).html(resourceHTML);
      }
    };
  }

  collapseResource(rowObj, currentRowIndex, isDivider) {
    for (let i = currentRowIndex + 1; i < rowObj.siblings().length + 1; i++) {
      if (isDivider === true && $('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider')) {
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

  expandResource(rowObj, currentRowIndex, isDivider) {
    for (let i = currentRowIndex + 1; i < rowObj.siblings().length + 1; i++) {
      if (isDivider === true && $('.fc-body .fc-resource-area tr:eq(' + i + ') td').hasClass('fc-divider')) {
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
}
